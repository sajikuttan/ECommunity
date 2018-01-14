import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AssignmentDetailsPage } from '../assignment-details/assignment-details';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projectData={};
    this.activeTab="details";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignmentCreatePage');
  }
  regiterForm(){
    console.log(this.projectData);
    this.navCtrl.push(AssignmentDetailsPage,{
      projectData: this.projectData
    });
  }
}
