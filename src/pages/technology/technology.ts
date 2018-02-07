import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Technology page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class Technology {

  technologies = ['C#','C','JAVA','HTML','PYTHON','SQL','CSS'];
  buttonClicked: boolean = false;
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Technology');
  }
  showButton(){
	this.buttonClicked = !this.buttonClicked;
  }
  technologyForm(){

  }
  addCourses(event){
    console.log(event);
  }
  goBack(){
  	this.navCtrl.pop();
  }
}
