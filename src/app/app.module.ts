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

import { HttpModule } from '@angular/http'; 

import { StatusBar } from '@ionic-native/status-bar';
import { VideoPlayer } from '@ionic-native/video-player';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    Login,
    ListPage,
    Friends,
    Project,
    ProjectDetails
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
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
    ProjectDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    VideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
