import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage,  NavController,  NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

//pages import
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
  private todo : FormGroup;
  public user_type;
  disabled = true;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private formBuilder: FormBuilder,private http :Http) {
    this.todo = this.formBuilder.group({
      user_name: ['', Validators.required],
      password: ['',Validators.compose([Validators.required, Validators.minLength(8)])],
      email: ['', Validators.required],
    });
    if(this.todo['user_name'] != null && this.todo['email'] != null && this.todo['password'] != null ){
      this.disabled = false;
    }
  }
  userType(type){
    this.user_type= type;
  }
  logForm(){
    var user_name = this.todo['user_name'];
    var email = this.todo['email'];
    var password = this.todo['password'];
    var password_confirmation = this.todo['password_confirmation'];
    var link = 'http://192.168.122.1/ElearnApp/signup.php';
    var data = JSON.stringify({user_name: user_name,email: email,password: password,password_confirmation :password_confirmation,type:this.user_type});
    let headers = new Headers();

    headers.append('Content-Type', 'application/json')
    this.http.post(link, data, {headers : headers})
    .subscribe(data => {
        this.navCtrl.push(HelloIonicPage);
        this.navCtrl.setRoot(HelloIonicPage);
        this.navCtrl.getActive(false);
    }, error => {
        alert("Oooops!");
    }); 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
