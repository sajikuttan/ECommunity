import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateProject } from '../create-project/create-project';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Assignment');
  }

  createCustomProject(){
  	this.navCtrl.push(CreateProject);
  }

}
