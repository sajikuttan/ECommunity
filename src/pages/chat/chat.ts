import { MyApp } from '../../app/app.component';
import { Component } from '@angular/core';
import { IonicPage,  NavController,  NavParams} from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import firebase from 'firebase/app';
import { Http } from '@angular/http';
/**
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chats {
  chatName : string;  
  chat_input:string;
  chats = [];
  key:any;
  ref;
  newmessage;
  name;
  messagesList;
  constructor(public navCtrl: NavController, public navParams: NavParams,private keyboard: Keyboard,public http: Http) {
    this.chatName = navParams.get('chatName');
    this.key = navParams.get('key');
    this.name = MyApp.userName;
    console.log(this.name);
    this.ref = firebase.database().ref('messages');
    http.get('https://us-central1-todo-firebase-c4298.cloudfunctions.net/helloWorld')
    .subscribe((data) => {
      console.log('data', data);
    })
  }

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Chat');
    this.ref = firebase.database().ref('messages/'+this.key);
    this.ref.on('value',data => {
  		let tmp = [];
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				name: data.val().name,
          message: data.val().message,
          toname:data.val().toname
  			})
  		});
  		this.messagesList = tmp;
  	});
  }
    send(){
      // add new data to firebase
      this.ref = firebase.database().ref('messages/'+this.key);
      this.ref.push({
        key:this.key,
        message: this.newmessage,
        fromname:this.name,
        toname:this.chatName
      });
    }
  

}
