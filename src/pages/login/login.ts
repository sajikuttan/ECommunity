import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook,FacebookLoginResponse } from '@ionic-native/facebook';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { MyApp } from '../../app/app.component';
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
  userDataResponse: any;
  url = "/signup";

  constructor(public navCtrl: NavController, public navParams: NavParams,private facebook: Facebook,public http: Http) {
    this.userData={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  goToHome(){
    this.navCtrl.setRoot(HelloIonicPage);
  }
  regiterForm(){
    let headers = new Headers();
    var data = JSON.stringify({
                first_name:this.userData.first_name,
                email:this.userData.email,
                password:this.userData.password,
                password_confirmation:this.userData.password_confirmation
              });
    headers.append('Accept', 'application/xml');
    headers.append('Authorization', 'Basic c2FqaWt1dHRhbjE5OTJAZ21haWwuY29tOmlubm92YXRpb24=');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Access-Control-Allow-Headers','*');
    this.http.post(MyApp.url+this.url,data,{headers : headers})
    .map(res => res.json())
    .subscribe(data => {
      this.userDataResponse.response = data;
      console.log(data);
      alert(data);
    }, error => {
        alert(error);
    });
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
