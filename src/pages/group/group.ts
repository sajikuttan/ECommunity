import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assignment } from '../assignment/assignment';
/**
 * Generated class for the Group page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class Group {

  friend : string;
  searchTerm: string = '';
  public friends = ['Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.friends;
  }
  skipGroup(){
  	this.navCtrl.push(Assignment);
  }
  addGroup(){
    let alert = this.alertCtrl.create({
    title: 'Create Group',
    inputs: [
      {
        name: 'Group Name',
        placeholder: 'Group Name'
      }
    ],
    buttons: [
      {
        text: 'Done',
        role: 'ok',
        handler: data => {
    		this.navCtrl.push(Assignment);      
        }
      }
    ]
  });
      alert.present();
  }

}
