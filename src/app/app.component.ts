import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { ListPage } from '../pages/list/list';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Friends } from '../pages/friends/friends';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Project } from '../pages/project/project';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;
  chats = [];
  friends = [];
  public my = 12;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.chats = ['Jhon Doe','Jhon Doe','Jhon Doe'];;
    this.friends = ['Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];
    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: HelloIonicPage },
      { title: 'Languages', component: ListPage },
      { title: 'Project', component: Project },
      { title: 'Friends', component: Friends }
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
}
