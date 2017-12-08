import { Component } from '@angular/core';
import { AlertController, Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/profile';
/**
 * Generated class for the People page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class People {

  public peopleList = ['Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];

  constructor(public navCtrl: NavController, public navParams: NavParams,public e: Events,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.peopleList;
  }
  addFriend(people,event){
    let alert = this.alertCtrl.create({
        title: 'Add Friends',
        subTitle: 'Do you want add ' + people + ' as Your Friend',
        buttons: [
          {
            text: 'Yes',
            role: 'ok',
            handler: () => {
              var target = event.srcElement;

              target.innerHTML = 'Request<br>Sent';
            }
          },
          {
            text: 'No',
            handler: () => {
              var target = event.srcElement;
              target.innerHTML = 'Add Friend';
            }
          }
        ]
      });
      alert.present();
  }
  
  viewProfile(){
    this.navCtrl.push(Profile);
  }
}
