import { MyApp } from '../../app/app.component';
import { Component } from '@angular/core';
import { IonicPage,  NavController,  NavParams} from 'ionic-angular';
import * as io from 'socket.io-client';
import { Keyboard } from '@ionic-native/keyboard';
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
  socket:any;
  chat_input:string;
  chats = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private keyboard: Keyboard) {
    this.chatName = navParams.get('chatName');
    this.socket = io('http://192.168.0.7:3000');
    
    
    this.socket.on('message', (msg) => {
      console.log("message", msg);
      this.chats.push(MyApp.userName + ": " +msg );
    });
  }

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Chat');
  }
  send(msg) {
        if(msg != '' || msg != null){
            this.socket.emit('message', msg);
        }
        this.chat_input = '';
        this.keyboard.show();
        this.keyboard.disableScroll(true);
    }

}
