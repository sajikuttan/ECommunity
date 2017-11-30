import { Data } from '../pipes/data';
import { DataSearch } from '../providers/data-search';
import { ProjectDetails } from '../pages/project-details/project-details';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {SpeechRecognition} from '@ionic-native/speech-recognition';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { Project } from '../pages/project/project';
import { Friends } from '../pages/friends/friends';
import { Chats } from '../pages/chat/chat';
import { Test } from '../pages/test/test';
import { Technology } from '../pages/technology/technology';
import { Assignment } from '../pages/assignment/assignment';
// import { Demo } from '../pages/demo/demo';
import { Facebook } from '@ionic-native/facebook';
import { HttpModule } from '@angular/http'; 
import { SwingModule } from 'angular2-swing';
import { StatusBar } from '@ionic-native/status-bar';
import { VideoPlayer } from '@ionic-native/video-player';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from "@ionic/storage";
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    Login,
    ListPage,
    Friends,
    Project,
    ProjectDetails,
    Data,
    Chats,
    Test,
    Assignment,
    Technology
    // Demo
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwingModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    Login,
    ListPage,
    Friends,
    Project,
    ProjectDetails,
    Chats,
    Test,
    Assignment,
    Technology,
    // Demo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    VideoPlayer,
    Keyboard,
    ScreenOrientation,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    DataSearch
  ]
})
export class AppModule {}