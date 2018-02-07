import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AssignmentDetailsPage } from '../assignment-details/assignment-details';
import firebase from 'firebase/app';
/**
 * Generated class for the AssignmentCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assignment-create',
  templateUrl: 'assignment-create.html',
})
export class AssignmentCreatePage {
  activeTab:any;
  projectData: any;
  ref;
  key;
  assignment_id:number;
  @ViewChild('projectId') projectId ;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projectData={};
    this.activeTab="details";
    this.ref = firebase.database().ref('Project');
    this.key = firebase.database().ref('Project').key;
    this.ref.on("child_added", function(data) {
      data.forEach(function(data) {
        console.log(" " + data.key + " " + data.val());
     });
      // this.projectId.val = data.val().id+1;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignmentCreatePage');
  }
  regiterForm(){
    console.log(this.projectData);

    this.ref = firebase.database().ref('Project/');
    var uid =firebase.auth().currentUser.uid;
    let response =this.ref.push({
                    name: this.projectData.name,
                    description:this.projectData.long_description,
                    technology:this.projectData.requirements,
                    type:this.projectData.type
                  });

    this.ref = firebase.database().ref('ProjectMembers/');
    var responseKey  = response.key;
    this.ref.push({
      memberKey: uid,
      projectKey:responseKey
    });
    
    console.log(responseKey);
    this.navCtrl.push(AssignmentDetailsPage,{
      projectData: this.projectData
    });
  }
}
