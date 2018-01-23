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
  assignment_id:number;
  @ViewChild('projectId') projectId ;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projectData={};
    this.activeTab="details";
    this.ref = firebase.database().ref('Project');
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
    this.ref.push({
      name: this.projectData.name,
      description:this.projectData.name,
      requirements:this.projectData.requirements,
      technology:this.projectData.requirements
    });
    this.navCtrl.push(AssignmentDetailsPage,{
      projectData: this.projectData
    });
  }
}
