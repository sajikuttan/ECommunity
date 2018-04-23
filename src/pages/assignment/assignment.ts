import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AssignmentCreatePage } from '../assignment-create/assignment-create';
import firebase from 'firebase/app';
import { AssignmentDetailsPage } from '../assignment-details/assignment-details';
import { Chats } from '../chat/chat';
/**
 * Generated class for the Assignment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-assignment',
  templateUrl: 'assignment.html',
})
export class Assignment {
  public  assignmentRef;
  public assignmentList=[];
  public key;
  public userDisable:boolean;
  public otherUserIdentifier = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.generateKey();
  }
  generateKey(){
    let key = this.navParams.get('key');
    let currentUserKey = firebase.auth().currentUser.uid;
    if(key=="" || key == null || key == undefined || key == currentUserKey ){
      this.key = currentUserKey;
      this.userDisable = true;
    }else{
      this.key = key;
      this.userDisable= false;
      this.otherUserIdentifier = 1;
    }
  }
  async getWorkgroup(){
    let uid = this.key;
    firebase.database().ref('ProjectMembers').orderByChild("memberKey").equalTo(uid).on("child_added", response => {
      let project_key =[response.val().projectKey];
      console.log(project_key);
      let tmp = [];
      project_key.forEach(key => {
        firebase.database().ref('Project')
        .child(key)
        .on('value',response =>{
          this.assignmentList.push({
            key: response.key,
            name: response.val().name,
            description: response.val().description
          });
        });
        
      });
    });
  }
  ionViewDidLoad() {
    this.getWorkgroup();
  }

  createCustomProject(){
  	this.navCtrl.push(AssignmentCreatePage);
  }

  goToAssignmentDetails(key){
    if(this.otherUserIdentifier>0){
      return 0;
    }else{
      this.navCtrl.push(AssignmentDetailsPage,{
        key: key
      });
    }
  }
  openChat(key,name){
    this.navCtrl.setRoot(Chats,{
      key:key,
      chatName:name,
      isGroup:true
    });
  }
}