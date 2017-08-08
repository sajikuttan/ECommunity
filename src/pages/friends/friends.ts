import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Friends page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class Friends {
  friend : string;
  myInput : string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private myApp : MyApp) {
    this.friend = "chats";
    MyApp.chats;
    MyApp.friends;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Friends');
  }
}