import { Component } from '@angular/core';
import {
  Alert,
  AlertController,
  IonicPage,
  Loading,
  LoadingController,
  NavController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

import { GooglePlus } from '@ionic-native/google-plus';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { EmailValidator } from '../../validators/email';
import firebase from 'firebase/app';
import { DatabaseProvider } from '../../providers/database/database';
import { MyApp } from '../../app/app.component';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    formBuilder: FormBuilder,
    private googlePlus: GooglePlus,
    public databaseProvider:DatabaseProvider
  ) {
    this.loginForm = formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required, EmailValidator.isValid])
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }

  goToSignup(): void {
    this.navCtrl.push('SignupPage');
  }
  googleSignIn():void{
    this.googlePlus.login({
      'webClientId': '566907326636-ne9s20vdsqcqpdup85k8ji23vc1jrlmv.apps.googleusercontent.com',
      'offline': true
    }).then( res => {
      const googleCredential = firebase.auth.GoogleAuthProvider
              .credential(res.idToken);
      firebase.auth().signInWithCredential(googleCredential)
      .then( response => {
        console.log("Firebase success: " + JSON.stringify(response));
        this.navCtrl.setRoot(HelloIonicPage);
      })
      .catch(err => console.log("inner "+err));
    })
    .catch(err => console.error(err));
  }
  goToResetPassword(): void {
    this.navCtrl.push('ResetPasswordPage');
  }

  async loginUser(): Promise<void> {
    var uid;
    var access_token;
    if (!this.loginForm.valid) {
      console.log(
        `Form is not valid yet, current value: ${this.loginForm.value}`
      );
    } else {
      const loading: Loading = this.loadingCtrl.create();
      loading.present();

      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      try {
        const loginUser: firebase.User = await this.authProvider.loginUser(
          email,
          password
        );
        MyApp.userName = loginUser.email;
        console.log(loginUser.displayName);
        uid = loginUser.uid;
        access_token = loginUser.refreshToken;
        this.databaseProvider.updateAuthenticationToken(uid,access_token);
        await loading.dismiss();
        this.navCtrl.setRoot(HelloIonicPage);
      } catch (error) {
        await loading.dismiss();
        const alert: Alert = this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }]
        });
        alert.present();
      }
    }
  }
}
