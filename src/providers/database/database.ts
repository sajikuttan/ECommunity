// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Http ,Headers} from '@angular/http';
// import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { AngularFire,FirebaseObjectObservable, FirebaseListObservable, AngularFireDatabase } from 'angularfire2';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  
  authToken: FirebaseListObservable<any[]>;
  value: FirebaseObjectObservable<any>;
  constructor() {
  } 
  saveAuthenticationToken(uid,token){
    var AccessTokenreferenece = firebase.database().ref('AccessToken');
    AccessTokenreferenece.push({
      uid:uid,
      authToken:token
    });
  }
  updateAuthenticationToken(uid,token){
    var af:AngularFireDatabase;
    // console.log(token);
    // var AccessTokenreferenece = firebase.database().ref('AccessToken');
    // AccessTokenreferenece.update({
    //   authToken:token
    // });
    // this.authToken = af.list('/AccessToken');
    // this.value = af.object('/value');
    // var res = this.authToken.update(uid,{
    //             authToken:token
    //           });
    // console.log(res);
  }
}
