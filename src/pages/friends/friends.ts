import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  activeTab;
  friend : string;
  searchTerm: string = '';
  ref:any;
  friendDisable:boolean;
  public key="";
  public friends = [];
  public requests = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public friendConnect:FriendConnectProvider,private toastCtrl: ToastController) {   
    this.ref = firebase.database().ref('userProfile'); 
    this.activeTab = "friends";
    if(this.navParams.get('param1') != null){
      this.friend = this.navParams.get('param1');
    }else{
      this.friend = "chats";
    }
    this.generateKey();
    this.getRequests();
    this.getFriends();
  }

  ionViewDidLoad() {
  }
  setFilteredItems() {
    if(this.searchTerm != ""){
      this.friends = this.filterFriends(this.searchTerm);
    }else{
      this.friends =[];
      this.getFriends();
    }
  }
  filterFriends(searchTerm){
    return  this.friends.filter((item) => {
        return item.email.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  generateKey(){
    let key = this.navParams.get('key');
    let currentUserKey = firebase.auth().currentUser.uid;
    if(key=="" || key == null || key == undefined || key == currentUserKey ){
      this.key = currentUserKey;
      this.friendDisable = true;
    }else{
      this.key = key;
      this.friendDisable = false;
    }
  }

  async getRequests(){
    try{
      await firebase.database().ref('userProfile/'+this.key+'/friends/')
      .orderByChild('status')
      .equalTo(1)
      .on('child_added',data=>{
        let key=data.key;
        console.log(key);
        firebase.database().ref('userProfile/'+key)
        .on('value',data=>{ 
          this.requests.push({
            key:data.key,
            email:data.val().email
          });
        });
      });
    }catch(err){
      console.log(err);
    }
  }
  async getFriends(){
    try{
      await firebase.database().ref('userProfile/'+this.key+'/friends/')
      .orderByChild('status')
      .equalTo(2)
      .on('child_added',data=>{
        let key=data.key;
        console.log(key);
        firebase.database().ref('userProfile/'+key)
        .on('value',data=>{ 
          this.friends.push({
            key:data.key,
            email:data.val().email
          });
        });
      }); 
    }catch(err){
      console.log(err);
    }
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
  viewProfile(email,key){
    this.navCtrl.push(Profile,{
      key:key,
      profile_viewer: 'sendMessage',
      role:1,
      username:email
    });
  }
  acceptRequest(key){
    this.friendConnect.acceptRequest(key);
    this.presentToast();
    this.navCtrl.setRoot(this.navCtrl.getActive().component,{
      key:this.key
    });
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Friend was added successfully',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}