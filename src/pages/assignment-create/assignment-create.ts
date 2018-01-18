import { Component } from '@angular/core';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projectData={};
    this.activeTab="details";
    this.ref = firebase.database().ref('Project');
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
      technology:this.projectData.requirements,
    });
    this.navCtrl.push(AssignmentDetailsPage,{
      projectData: this.projectData
    });
  }
}
