import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage,  NavController,  NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from '@ionic/cloud-angular';
import {JwtHelper} from "angular2-jwt";
// import {Storage} from "@ionic/storage";
//pages import
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
  private todo : FormGroup;
  disabled = true;
  // private LOGIN_URL = "http://127.0.0.1:8000/sessions/create";
  private SIGNUP_URL = "http://127.0.0.1:8000/en/technologies";

  auth: Auth;

  // // When the page loads, we want the Login segment to be selected
  authType: string = "login";

  // // We need to set the content type for the server
  contentHeader = new Headers({"Content-Type": "application/json"});

  error: string;
  jwtHelper = new JwtHelper();
  user: string;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private formBuilder: FormBuilder,private http: Http) {
    this.todo = this.formBuilder.group({
      user_name: ['', Validators.required],
      password: ['',Validators.compose([Validators.required, Validators.minLength(8)])],
      email: ['', Validators.required],
    });
    if(this.todo['user_name'] != null && this.todo['email'] != null && this.todo['password'] != null ){
      this.disabled = false;
    }
    // storage.ready().then(() => {
    //   storage.get('profile').then(profile => {
    //     this.user = JSON.parse(profile);
    //   }).catch(console.log);
    // });
  }
  logForm(){
    // var user_name = this.todo['user_name'];
    // var email = this.todo['email'];
    // var password = this.todo['password'];
    // var data = JSON.stringify({email: email,password: password});
    let headers = new Headers();

    headers.append('Accept', 'application/xml');
    headers.append('Authorization', 'Basic c2FqaWt1dHRhbjE5OTJAZ21haWwuY29tOmlubm92YXRpb24=');
    headers.append('Access-Control-Allow-Origin','*');
    console.log(headers);
    this.http.get(this.SIGNUP_URL,{headers : headers})
    .subscribe(data => {
        alert("Success");
    }, error => {
        alert("Oooops!");
    }); 
  }
  // signup(credentials) {
  //   this.http.post(this.SIGNUP_URL,credentials, { headers: this.contentHeader })
  //     .map(res => res.json())
  //     .subscribe(
  //       data => this.authSuccess(data.id_token),
  //       err => {
  //        alert(err);
  //     });
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  // authSuccess(token) {
  //   this.error = null;
  //   this.storage.set('token', token);
  //   this.user = this.jwtHelper.decodeToken(token).username;
  //   this.storage.set('profile', this.user);
  // }

}
