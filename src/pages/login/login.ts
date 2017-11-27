import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook,FacebookLoginResponse } from '@ionic-native/facebook';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  userData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  goToHome(){
    this.navCtrl.setRoot('HelloIonicPage');
  }

  facebookLogin() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
    this.navCtrl.push(HelloIonicPage);
  }

}
