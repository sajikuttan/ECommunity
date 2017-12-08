//Plugin and Required packages
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {SpeechRecognition} from '@ionic-native/speech-recognition';
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

//pages packages
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ProjectDetails } from '../pages/project-details/project-details';
import { Login } from '../pages/login/login';
import { Project } from '../pages/project/project';
import { People } from '../pages/people/people';
import { Profile } from '../pages/profile/profile';
import { Friends } from '../pages/friends/friends';
import { Chats } from '../pages/chat/chat';
import { Test } from '../pages/test/test';
import { CreateProject } from '../pages/create-project/create-project';
import { Technology } from '../pages/technology/technology';
import { Assignment } from '../pages/assignment/assignment';
import { Group } from '../pages/group/group';

//pipes packages
import { Data } from '../pipes/data';

//providers packages
import { DataSearch } from '../providers/data-search';

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
    Technology,
    People,
    Profile,
    Group,
    CreateProject
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
    People,
    Profile,
    Group,
    CreateProject,
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