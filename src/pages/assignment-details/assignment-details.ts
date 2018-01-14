import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Friends } from '../friends/friends';

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
  activeTab;
  projectName:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projectData = navParams.get('projectData');
    this.projectName = this.projectData.name;
    this.activeTab = "details";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignmentDetailsPage');
  }
  addMembers(){
    this.navCtrl.push(Friends);
  }
}
