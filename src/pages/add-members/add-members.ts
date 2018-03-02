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
  friends=[];
  memberKey;
  memberadd;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.memberRef = firebase.database().ref('userProfile');
    this.memberKey=[];
    this.memberadd=false;
    this.viewMembers();
  }

  ionViewDidLoad() {
    
  }
  async viewMembers(){
    let uid = firebase.auth().currentUser.uid;
    try{
      await firebase.database().ref('userProfile/'+uid+'/friends/')
      .orderByChild('status')
      .equalTo(2)
      .on('child_added',data=>{
        let key=data.key;
        console.log(key);
        firebase.database().ref('userProfile/'+key)
        .on('value',data=>{ 
          this.friends.push({
            key:data.key,
            email:data.val().email
          });
        });
      });      
    }catch(err){
      console.log(err);
    }
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
