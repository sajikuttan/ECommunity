import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import firebase from 'firebase';
import { AssignmentDetailsPage } from '../assignment-details/assignment-details';
/**
 * Generated class for the AddMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-members',
  templateUrl: 'add-members.html',
})
export class AddMembersPage {
  memberRef:any;
  friends:any;
  memberKey;
  memberadd;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.memberRef = firebase.database().ref('userProfile');
    this.memberKey=[];
    this.memberadd=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMembersPage');
    this.memberRef.on('value',data => {
  		let tmp = [];
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				name: data.val().name,
  				email: data.val().email
  			})
  		});
  		this.friends = tmp;
    });
    console.log(this.friends);
  }
  addMemebers(key,name){
    
    this.memberKey.push({
      key:key,
      name:name
    });
    console.log(this.memberKey);
    this.memberadd=true;
  }
  removeFromProject(key){
    this.memberKey.splice(key);
  }
  addtoProject(){
   this.viewCtrl.dismiss(this.memberKey);
  }
}
