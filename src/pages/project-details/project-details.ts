import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project-details',
  templateUrl: 'project-details.html',
})
export class ProjectDetails {
  project_title;
  project_type;
  project_app_type;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.project_title = navParams.get('title');
    this.project_type = navParams.get('type');
    this.project_app_type = navParams.get('app_type');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetails');
  }
  goBack(){
    this.navCtrl.pop();
  }
}
