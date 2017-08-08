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
  public static project_dev = 0;
  public static project_test = 1;
  public static project_mobile;
  public static project_website;
  public static project_web_app;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.project_field = 'development';
    Project.project_mobile = 0;
    Project.project_web_app = 1;
    Project.project_website = 2;
  }
  projectDetails(title,type,app_type){   
    this.navCtrl.push(ProjectDetails,{
      title : title,
      type : type,
      app_type : app_type
    });                                                                                                                                                                                 
  }
}