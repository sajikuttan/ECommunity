import { Component, ViewChild } from '@angular/core';

import { AlertController, MenuController, Nav, Platform } from 'ionic-angular';

import { ListPage } from '../pages/list/list';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Friends } from '../pages/friends/friends';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Project } from '../pages/project/project';
import { Test } from '../pages/test/test';
import { Assignment } from '../pages/assignment/assignment';
import { Login } from '../pages/login/login';
import { Demo } from '../pages/demo/demo';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;
  public static userName = "Jhon Doe";
  public static url = "http://192.168.0.7:8000/en";
  public chats = [];
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: HelloIonicPage },
      { title: 'Languages', component: ListPage },
      { title: 'Project', component: Project },
      { title: 'Friends', component: Friends },
      { title: 'Test', component: Test },
      { title: 'Assignment', component: Assignment },
      { title: 'Login', component: Login },
      { title: 'Demo', component: Demo }
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
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'IP',
          placeholder: 'IP',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'No',
          role: 'No',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
            MyApp.url = "http://"+data.IP+":8000/en";
          }
        }
      ]
    });
    alert.present();
  }
}
