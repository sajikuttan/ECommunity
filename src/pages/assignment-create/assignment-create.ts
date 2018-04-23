import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase/app';
import { Assignment } from '../assignment/assignment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  key;
  assignment_id:number;
  @ViewChild('projectId') projectId ;
  public createFrom: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,formBuilder: FormBuilder) {
    this.projectData={};
    this.activeTab="details";
    this.ref = firebase.database().ref('Project');
    this.key = firebase.database().ref('Project').key;
    this.ref.on("child_added", function(data) {
      data.forEach(function(data) {
        console.log(" " + data.key + " " + data.val());
     });
      // this.projectId.val = data.val().id+1;
    });
    this.createFrom = formBuilder.group({
      name: [
        '',
        Validators.compose([Validators.required])
      ],
      long_description:[
        '',
        Validators.compose([Validators.required])
      ],
      type:[
        '',
        Validators.compose([Validators.required])
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignmentCreatePage');
  }
  regiterForm(){
    console.log(this.projectData);
    const name = this.createFrom.value.name;
    const description = this.createFrom.value.long_description;
    const type = this.createFrom.value.type;
    this.ref = firebase.database().ref('Project/');
    var uid =firebase.auth().currentUser.uid;
    let response =this.ref.push({
                    name: name,
                    description:description,
                    type:type
                  });

    this.ref = firebase.database().ref('ProjectMembers/');
    var responseKey  = response.key;
    this.ref.push({
      memberKey: uid,
      projectKey:responseKey,
      isAdmin:1
    });
    
    console.log(responseKey);
    this.navCtrl.push(Assignment);
  }
}
