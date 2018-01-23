import { Injectable } from '@angular/core';
import { FirebaseTokenGenerator } from 'firebase-token-generator';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {
  constructor() {}

  loginUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
    // var uid = firebase.auth().currentUser.uid;
    // firebase.auth().createCustomToken(uid);
  }

  async signupUser(email: string, password: string) {
    try {
      const newUser: firebase.User = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await firebase
        .database()
        .ref(`/userProfile/${newUser.uid}/email`)
        .set(email);
      var uid = firebase.auth().currentUser.uid;
      console.log(uid);
      // var additionalClaims = {
      //   premiumAccount: true
      // };
      var generator = new FirebaseTokenGenerator('AIzaSyABOMA1sECLaBejkrK2MjOgsBGI2sZd5fk');
      console.log(generator);
      var token = generator.createToken({uid: uid});
      console.log(token);

      var auth_token = firebase.auth().createCustomToken(uid,newUser);
      
      console.log("User Id : " + uid + " AuthenticationToken: " + auth_token);
      var AccessTokenreferenece = firebase.database().ref('AccessToken');
      AccessTokenreferenece.push({
        uid:uid,
        authToken:auth_token
      });
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  resetPassword(email: string){
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(){
    return firebase.auth().signOut();
  }
}
