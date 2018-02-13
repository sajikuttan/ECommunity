import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectDetails } from '../project-details/project-details';
import firebase from 'firebase';
/**
 * Generated class for the ProjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage {

  public type:string;
  public project_list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = navParams.get('projectType');
  }

  ionViewDidLoad() {
    this.projectList();
  }

  projectList(){
    firebase.database().ref('Project/')
    .orderByChild('type')
    .equalTo(this.type)
    .on('child_added',data=>{
      this.project_list.push({
        key:data.key,
        name:data.val().name,
        description:data.val().description
      });
      console.log(this.project_list);
    });
  }

  projectDetails(key){
    this.navCtrl.push(ProjectDetails,{
      key:key
    });
  }
}
