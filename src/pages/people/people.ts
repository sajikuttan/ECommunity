import { Component } from '@angular/core';
import { AlertController, Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/profile';
import firebase from 'firebase';
import { FCM } from '@ionic-native/fcm';
import { FriendConnectProvider } from '../../providers/friend-connect/friend-connect';
/**
 * Generated class for the People page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class People {

  searchTerm: string = '';
  public peopleList:any;
  public friends = [];
  ref;
  key;
  constructor(public navCtrl: NavController, public navParams: NavParams,public e: Events,private alertCtrl: AlertController, private fcm: FCM,public friendConnect:FriendConnectProvider) {
    this.ref = firebase.database().ref('userProfile');
    this.generateKey();
    this.getAllUsers();
  }

  ionViewDidLoad() {
    this.peopleList;
    
  }
  generateKey(){
    let key = this.navParams.get('key');
    let currentUserKey = firebase.auth().currentUser.uid;
    if(key=="" || key == null || key == undefined || key == currentUserKey ){
      this.key = currentUserKey;
    }else{
      this.key = key;
    }
  }
  viewAllUsers(){
    let user=[];
    this.ref.on('value',data => {
  		let tmp = [];
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				name: data.val().name,
  				email: data.val().email
        });
        this.peopleList = tmp;
  		});
  	});
  }

  getAllUsers(){
    this.viewAllUsers();
  }
  deleteFriends(){
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
          let tmp = [];
          tmp.push({
            key: data.key,
            name: data.val().name,
            email: data.val().email
          });
          this.peopleList = tmp;
        });
      });      
    }catch(err){
      console.log(err);
    }
  }
  setFilteredItems() {
    if(this.searchTerm != ""){
      this.peopleList = this.filterPeople(this.searchTerm);
    }else{
      this.peopleList =[];
      this.viewAllUsers();
    }
  }
  filterPeople(searchTerm){
    return  this.peopleList.filter((item) => {
        return item.email.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  addFriend(people,key,event){
    let alert = this.alertCtrl.create({
        title: 'Add Friends',
        subTitle: 'Do you want add ' + people + ' as Your Friend',
        buttons: [
          {
            text: 'Yes',
            role: 'ok',
            handler: () => {
              var target = event.srcElement;

              target.innerHTML = 'Request<br>Sent';
              let uid = firebase.auth().currentUser.uid;
              this.friendConnect.sendRequest(uid,key);
              this.fcm.onNotification().subscribe(data => {
                if(data.wasTapped) {
                 console.info("Received in background");
                } else {
                 console.info("Received in foreground");
                };
              });
            }
          },
          {
            text: 'No',
            handler: () => {
              var target = event.srcElement;
              target.innerHTML = 'Add Friend';
            }
          }
        ]
      });
      alert.present();
  }
  
  viewProfile(email,key){
    this.navCtrl.push(Profile,{
      profile_viewer : 'addFriend',
      role:2,
      username:email,
      key:key
    });
  }
}
