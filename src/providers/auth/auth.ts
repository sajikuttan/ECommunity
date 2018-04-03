import { Injectable } from '@angular/core';
import { FirebaseTokenGenerator } from 'firebase-token-generator';
import firebase, { database } from 'firebase';

@Injectable()
export class AuthProvider {
  constructor() {}

  loginUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
    
  }

  async signupUser(email: string, password: string,name: string) {
    try {
      const newUser: firebase.User = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await firebase
        .database()
        .ref(`/userProfile/${newUser.uid}/`)
        .set({
          email,
          name
        });
      var uid = firebase.auth().currentUser.uid;
      console.log(uid);
      
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
