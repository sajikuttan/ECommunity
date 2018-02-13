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
  public assignmentList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  async getWorkgroup(){
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref('ProjectMembers').orderByChild("memberKey").equalTo(uid).on("child_added", response => {
      let project_key =[response.val().projectKey];
      console.log(project_key);
      let tmp = [];
      project_key.forEach(key => {
        firebase.database().ref('Project')
        .child(key)
        .once('value',response =>{
          tmp.push({
            key: response.key,
            name: response.val().name,
            description: response.val().description
          });
          console.log(tmp);
          if(tmp){
            this.assignmentList = tmp;
          }
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
    this.navCtrl.push(AssignmentDetailsPage,{
      key: key
    });
  }
  openChat(key,name){
    this.navCtrl.push(Chats,{
      key:key,
      chatName:name,
      isGroup:true
    });
  }
}