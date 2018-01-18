import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Friends } from '../friends/friends';
import { Assignment } from '../assignment/assignment';
import { Technology } from '../technology/technology';
import { People } from '../people/people';
import { Chats } from '../chat/chat';
/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  username :string;
  template_identifier: string;
  selectedTheme :string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.username = navParams.get('username');
  	this.template_identifier = navParams.get('profile_viewer');
    if(this.template_identifier==null){
      this.template_identifier='connectMoreFriend';
    }
    console.log(this.template_identifier);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }
  viewFriends(){
  	this.navCtrl.push(Friends);
  }
  viewProjects(){
  	this.navCtrl.push(Assignment);
  }
  viewTechnology(){
  	this.navCtrl.push(Technology);
  }
  addFriend(){

  }

  sendMessage(friend: string){
    this.navCtrl.push(Chats,{
      chatName:friend
    });
  }
  connectFriends(){
  	this.navCtrl.push(People);
  }

}
