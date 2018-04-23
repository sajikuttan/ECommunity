//Plugin and Required packages
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {SpeechRecognition} from '@ionic-native/speech-recognition';
import { HttpModule } from '@angular/http'; 
import { SwingModule } from 'angular2-swing';
import { StatusBar } from '@ionic-native/status-bar';
import { VideoPlayer } from '@ionic-native/video-player';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from "@ionic/storage";
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SQLite } from '@ionic-native/sqlite';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus';
import { Firebase } from '@ionic-native/firebase';
import { FCM } from '@ionic-native/fcm';

//pages packages
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ProjectDetails } from '../pages/project-details/project-details';
import { LoginPage } from '../pages/login/login';
import { Project } from '../pages/project/project';
import { People } from '../pages/people/people';
import { Profile } from '../pages/profile/profile';
import { Friends } from '../pages/friends/friends';
import { Chats } from '../pages/chat/chat';
import { Test } from '../pages/test/test';
import { CreateProject } from '../pages/create-project/create-project';
import { Technology } from '../pages/technology/technology';
import { Assignment } from '../pages/assignment/assignment';
import { AssignmentCreatePage } from '../pages/assignment-create/assignment-create';
import { AssignmentDetailsPage } from '../pages/assignment-details/assignment-details';
import { Group } from '../pages/group/group';
import { SettingsPage } from '../pages/settings/settings';
import { AddMembersPage } from '../pages/add-members/add-members';
// import { ResetPasswordPage } from '../pages/reset-password/reset-password';
//pipes packages
import { Data } from '../pipes/data';

//providers packages
import { DataSearch } from '../providers/data-search';
import { SettingsProvider } from '../providers/settings/settings';
import { YoutubeProvider } from '../providers/youtube/youtube';
import { AuthProvider } from '../providers/auth/auth';
import { DatabaseProvider } from '../providers/database/database';
import { ProjectListPage } from '../pages/project-list/project-list';
import { CoursesProvider } from '../providers/courses/courses';
import { FriendConnectProvider } from '../providers/friend-connect/friend-connect';
import { LoadingModalComponent } from '../components/loading-modal/loading-modal';



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    LoginPage,
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
    CreateProject,
    SettingsPage,
    AssignmentCreatePage,
    AssignmentDetailsPage,
    ProjectListPage,
    AddMembersPage,
    LoadingModalComponent
    // ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    SwingModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    LoginPage,
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
    SettingsPage,
    AssignmentCreatePage,
    AssignmentDetailsPage,
    ProjectListPage,
    AddMembersPage,
    LoadingModalComponent
    // ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    VideoPlayer,
    Keyboard,
    ScreenOrientation,
    SQLite,
    Firebase,
    FCM,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataSearch,
    SettingsProvider,
    YoutubeProvider,
    AuthProvider,
    DatabaseProvider,
    CoursesProvider,
    FriendConnectProvider,
    LoadingModalComponent
  ]
})
export class AppModule {}