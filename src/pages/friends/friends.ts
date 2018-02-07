import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chats } from '../chat/chat';
import { Profile } from '../profile/profile';
import { People } from '../people/people';
import firebase from 'firebase';
import { FriendConnectProvider } from '../../providers/friend-connect/friend-connect';
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
  activeTab: string;
  friend : string;
  searchTerm: string = '';
  ref:any;
  public friends = [];
  requests:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public friendConnect:FriendConnectProvider) {   
    this.ref = firebase.database().ref('userProfile'); 
    this.activeTab = "friends";
    if(this.navParams.get('param1') != null){
      this.friend = this.navParams.get('param1');
    }else{
      this.friend = "chats";
    }
  }

  ionViewDidLoad() {
    this.getRequests();
    // this.ref.on('value',data => {
  	// 	let tmp = [];
  	// 	data.forEach( data => {
  	// 		tmp.push({
  	// 			key: data.key,
  	// 			name: data.val().name,
  	// 			email: data.val().email
  	// 		})
  	// 	});
  	// 	this.friends = tmp;
  	// });
  }
  async getRequests(){
    let uid = firebase.auth().currentUser.uid;
    let friend = await this.friendConnect.getRequest(uid)
    console.log(friend);
  }
  addFriend(){
    this.navCtrl.push(People);
  }
  openChat(chat,key){
    this.navCtrl.push(Chats, {
      chatName: chat,
      key:key
    });
  }
  viewProfile(){
    this.navCtrl.push(Profile,{
      profile_viewer: 'sendMessage',
      role:1
    });
  }
}