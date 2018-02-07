import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import firebase from 'firebase/app';
import { AddMembersPage } from '../add-members/add-members';
/**
 * Generated class for the AssignmentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assignment-details',
  templateUrl: 'assignment-details.html',
})
export class AssignmentDetailsPage {
  projectData:any;
  projectMembers:any;
  activeTab;
  projectName:string;
  ref;
  projectDetails;
  key:any;
  members:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.key = navParams.get('key');
    this.activeTab = "details";
    this.projectDetails={};
    this.projectMembers=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignmentDetailsPage');
    
    this.ref = firebase.database().ref('Project/'+this.key);
    this.ref.on('value',data => {
      console.log(data.key);
      let project_key =data.key;
      this.projectDetails = {
        key:data.key,
        name: data.val().name,
        description: data.val().description,
        technology: data.val().technology,
        type:data.val().type
      };
      this.projectName = this.projectDetails.name;
      firebase.database().ref('ProjectMembers').orderByChild('projectKey').equalTo(project_key).on('child_added',data=>{
        let memberKey = [];
        memberKey.push({
          key:data.key,
          memberKey:data.val().memberKey
        });
        console.log(memberKey);
        memberKey.forEach(key =>{
          firebase.database().ref('userProfile').orderByKey().equalTo(key.memberKey).on('child_added',data=>{
            let tmp = [];
            this.projectMembers.push({
              key:data.key,
              email:data.val().email
            });
          });
        });
      });
    });
    
  }
  addMembers(){
    console.log(this.key);
    let profileModal = this.modalCtrl.create(AddMembersPage, { addMeber: true });
    
    profileModal.onDidDismiss(data => {
      console.log(data.key);
      this.members = data;
      this.ref = firebase.database().ref('ProjectMembers');
      data.forEach(data =>{
        this.ref.push({
          projectKey:this.key,
          memberKey:data.key
        });
      });
    });
    
    profileModal.present();
  }
}
