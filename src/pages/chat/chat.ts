import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chats {
  chatName : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chatName = navParams.get('chatName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chat');
  }

}
