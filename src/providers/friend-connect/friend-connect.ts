import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
/*
  Generated class for the FriendConnectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FriendConnectProvider {

  friendsList =[];
  constructor(public http: HttpClient) {
  }

  sendRequest(uid,friendid){
    firebase.database().ref('userProfile/'+friendid+'/friends/'+uid)
    .push({status:1});
  }
  getFriends(uid){
    firebase.database().ref('userProfile/'+uid+'/friends')
    .orderByChild('status')
    .equalTo(2)
    .on('child_added',data=>{
      console.log(data.val());
    });
  }
  getRequest(uid):any{
    try{
      firebase.database().ref('userProfile/'+uid+'/friends')
      .on('child_added',data=>{
        let friends = [data.key];
        friends.forEach(key =>{
          firebase.database().ref('userProfile/'+key)
          .on('value',data=>{ 
            this.friendsList.push({
              email:data.val().email
            });
          });
        });
        return this.friendsList;
      });
    }catch(err){
      console.log(err);
    }
    
  }

}
