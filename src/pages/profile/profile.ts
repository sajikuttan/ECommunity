import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Friends } from '../friends/friends';
import { Assignment } from '../assignment/assignment';
import { Technology } from '../technology/technology';
import { People } from '../people/people';
import { Chats } from '../chat/chat';
import { MyApp } from '../../app/app.component';
import firebase from 'firebase';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
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
  key:string;
  skills:string;
  skillDisable:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public toastCtrl: ToastController) {
    let username = navParams.get('username');
    if(username == null || username == "" || username == undefined){
      this.username = firebase.auth().currentUser.email;
    }else{
      this.username = username;
    }
    this.key = (navParams.get('key')!=null)?navParams.get('key'):firebase.auth().currentUser.uid;
  	
  	this.template_identifier = navParams.get('profile_viewer');
    if(this.template_identifier==null){
      this.template_identifier='connectMoreFriend';
    }
    this.generateKey();
    this.viewSkills();
    console.log(this.template_identifier);
    
  }
  generateKey(){
    let key = this.navParams.get('key');
    let currentUserKey = firebase.auth().currentUser.uid;
    if(key=="" || key == null || key == undefined || key == currentUserKey ){
      this.key = currentUserKey;
      this.skillDisable = true;
    }else{
      this.key = key;
      this.skillDisable = false;
    }
  }

  viewSkills(){
    let skillRef = firebase.database().ref('Skills').orderByKey().equalTo(this.key);
    skillRef.once('child_added',data=>{
      this.skills = data.val().skills;
      console.log(this.skills);
    });
  }
  ionViewDidLoad() {

  }

  viewFriends(){
  	this.navCtrl.push(Friends,{
      key:this.key
    });
  }
  viewProjects(){
  	this.navCtrl.push(Assignment,{
      key:this.key
    });
  }
  viewTechnology(){
  	this.navCtrl.push(Technology);
  }
  addFriend(){

  }
  addSkill(){
    let skills="";
    if(this.skills!=null){
      skills = this.skills;
    }
    let alert = this.alertCtrl.create({
      title: 'Add Skills by comma saperation',
      inputs: [
        {
          name: 'skill',
          placeholder: 'Add Skills',
          value:skills
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if(data.skill){
              let uid = firebase.auth().currentUser.uid;
              firebase.database().ref('Skills/'+uid)
              .set({
                skills:data.skill
              });
              let alert = this.alertCtrl.create({
                title: 'Skills added Successfully',
                buttons: ['OK']
              });
            }else{
              this.showErrorToast('Please enter Skills');
            }
            
            alert.present();
            this.viewSkills();
          }
        }
      ]
    });
    alert.present();
  }
  sendMessage(friend: string){
    this.navCtrl.push(Chats,{
      chatName: this.username,
      key:this.key
    });
  }
  connectFriends(){
  	this.navCtrl.push(People);
  }
  showErrorToast(data: any) {
    
    let toast = this.toastCtrl.create({
      message: data,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
