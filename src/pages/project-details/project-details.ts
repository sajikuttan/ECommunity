import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Group } from '../group/group';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';

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
  active_button;
  status;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.key = navParams.get('key');

  }

  ionViewDidLoad() {
  }
  getProjectDetails(){
    let uid = firebase.auth().currentUser.uid;
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
          projectKey:data.val().projectKey,
          memberKey:data.val().memberKey
        });
        let res = memberKey.find(result => result.memberKey == uid);
        if(res){
          console.log(res.projectKey);
          this.storage.set('button_status',2);
          this.storage.set('key',res.projectKey);
        }else{
          this.storage.set('button_status',0);
        }
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
    this.storage.get('button_status').then(result=>{
      if(result == 1){
        this.storage.get('key').then(result=>{
          if(result == this.key){
            this.active_button = 'sent';
          }
        });        
      }else if(result == 2){
        this.storage.get('key').then(result=>{
          if(result == this.key){
            this.active_button = 'joined';
          }
        });
      }else{
        this.active_button = 'join';
      }
    });
  }
  joinNow(key){
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref('Requests/'+key)
    .push({
      uid:uid,
      project_key:key
    });
    this.storage.set('button_status',1);
    this.storage.set('key',key);
  }
}
