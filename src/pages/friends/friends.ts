import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chats } from '../chat/chat';
import { Profile } from '../profile/profile';
import { People } from '../people/people';
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
  searchTerm: string = '';
  
  public friends = ['Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    if(this.navParams.get('param1') != null){
      this.friend = this.navParams.get('param1');
    }else{
      this.friend = "chats";
    }
  }

  ionViewDidLoad() {
    this.friends;
  }
  addFriend(){
    this.navCtrl.push(People);
  }
  openChat(chat){
    this.navCtrl.push(Chats, {
      chatName: chat
    });
  }
  viewProfile(){
    this.navCtrl.push(Profile,{
      profile_viewer: 'sendMessage'
    });
  }
}