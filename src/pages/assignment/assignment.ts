import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AssignmentCreatePage } from '../assignment-create/assignment-create';
import firebase from 'firebase/app';
import { AssignmentDetailsPage } from '../assignment-details/assignment-details';
/**
 * Generated class for the Assignment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-assignment',
  templateUrl: 'assignment.html',
})
export class Assignment {
  assignmentRef;
  assignmentList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.assignmentRef = firebase.database().ref('Project');
  }

  ionViewDidLoad() {
    this.assignmentRef.on('value',data => {
  		let tmp = [];
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				id: data.val().id,
  				name: data.val().name,
          description: data.val().description,
          requirements:data.val().requirements
  			})
      });
      this.assignmentList = tmp;
    });
  }

  createCustomProject(){
  	this.navCtrl.push(AssignmentCreatePage);
  }

  goToAssignmentDetails(index){
    console.log(this.assignmentList[index]);
    this.navCtrl.push(AssignmentDetailsPage,{
      projectData: this.assignmentList[index]
    });
  }

}
