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
import { DatabaseProvider } from '../../providers/database/database';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { EmailValidator } from '../../validators/email';
import firebase from 'firebase/app';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  public signupForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    formBuilder: FormBuilder,
    public storage:Storage,
    public databaseProvider:DatabaseProvider
  ) {
    this.signupForm = formBuilder.group({
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

  async signupUser(): Promise<void> {
    var access_token;
    var uid;
    if (!this.signupForm.valid) {
      console.log(
        `Form is not valid yet, current value: ${this.signupForm.value}`
      );
    } else {
      const loading: Loading = this.loadingCtrl.create();
      loading.present();

      const email = this.signupForm.value.email;
      const password = this.signupForm.value.password;

      try {
        const signupUser: firebase.User = await this.authProvider.signupUser(
          email,
          password
        );
        await loading.dismiss();
        signupUser.getToken().then(token => {
          console.log(token);
          access_token = token;
          uid = signupUser.uid;
          this.databaseProvider.saveAuthenticationToken(uid,access_token);
          this.storage.set('access_token',token);
        }) // save the token server-side and use it to push notifications to this device
        .catch(error => console.error('Error getting token', error));
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
  goBack(){
    this.navCtrl.pop();
  }
}
