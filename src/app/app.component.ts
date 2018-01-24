import { Component, ViewChild } from '@angular/core';

import { MenuController, Nav, Platform } from 'ionic-angular';

import { ListPage } from '../pages/list/list';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Friends } from '../pages/friends/friends';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Project } from '../pages/project/project';
import { LoginPage } from '../pages/login/login';
import { Assignment } from '../pages/assignment/assignment';
import { Profile } from '../pages/profile/profile';
import { Chats } from '../pages/chat/chat';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SettingsProvider } from '../providers/settings/settings';
import firebase from 'firebase';
import { firebaseConfig } from './credentials';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // make HelloIonicPage the root (or first) page
  selectedTheme: String;
  rootPage: HelloIonicPage;
  loader: any;
  cards: Array<any>;
  pages: Array<{title: string, component: any}>;
  public static userName = "Saji";
  public chats = [];
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public loadingCtrl: LoadingController, 
    public storage: Storage
  ) {
    this.initializeApp();
    this.presentLoading();
    firebase.initializeApp(firebaseConfig);
    // const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.nav.setRoot(HelloIonicPage);
    //     unsubscribe();
    //   } else {
    //     this.nav.setRoot(LoginPage);
    //     unsubscribe();
    //   }
    // });
    this.storage.get('introShown').then((result) => {
 
        if(result){
          this.nav.setRoot(HelloIonicPage);
        } else {
          this.nav.setRoot(LoginPage);
          this.storage.set('introShown', true);
        }
 
        this.loader.dismiss();
 
      });
    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: HelloIonicPage },
      { title: 'Technology', component: ListPage },
      { title: 'Project', component: Project },
      { title: 'Friends', component: Friends },
      { title: 'Workgroup', component: Assignment },
      { title: 'Profile', component: Profile },
      { title: 'Login', component: LoginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
 
    this.loader.present();
 
  }
}
