import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Group } from '../group/group';
import firebase from 'firebase';

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
  projectName:string;
  key:string;
  projectDetails:any;
  projectMembers=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.key = navParams.get('key');
    this.getProjectDetails();
  }

  ionViewDidLoad() {
  }
  getProjectDetails(){
    let ref = firebase.database().ref('Project/'+this.key);
    ref.on('value',data => {
      let project_key =data.key;
      this.projectDetails = {
        key:data.key,
        name: data.val().name,
        description: data.val().description,
        technology: data.val().technology,
        type:data.val().type
      };
      this.projectName = this.projectDetails.name;
      firebase.database().ref('ProjectMembers/').orderByChild('projectKey').equalTo(project_key).on('child_added',data=>{
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
            console.log(tmp);
          });
        });
      });
    });
  }
  joinNow(key){
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref('Requests/'+key)
    .push({
      uid:uid,
      project_key:key
    });
  }
}
