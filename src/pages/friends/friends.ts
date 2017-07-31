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

  chats = [];
  friends = [];
  friend : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.friend = "chats";
    this.chats = ['Jhon Doe','Jhon Doe','Jhon Doe'];;
    this.friends = ['Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Friends');
  }

}