import { ProjectDetails } from '../project-details/project-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Project page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class Project {
  project_field : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.project_field = 'development';
  }
  projectDetails(){   
    this.navCtrl.push(ProjectDetails);                                                                                                                                                                                 
  }
}