import { Component } from '@angular/core';
import { AlertController, Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chats } from '../chat/chat';
/**
 * Generated class for the Friends page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class Friends {
  friend : string;
  myInput : string = '';
  public chats = ['Jhon Doe','Jhon Doe 2','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];
  public friends = ['Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];
  public peopleList = ['Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];
  constructor(public navCtrl: NavController, public navParams: NavParams,public e: Events,private alertCtrl: AlertController) {
    
    if(this.navParams.get('param1') != null){
      this.friend = this.navParams.get('param1');
    }else{
      this.friend = "chats";
    }
    this.chats;
    this.friends;
    this.peopleList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Friends');
  }
  addFriend(people,event){
    let alert = this.alertCtrl.create({
        title: 'Add Friends',
        subTitle: 'Do you want add ' + people + ' as Your Friend',
        buttons: [
          {
            text: 'Yes',
            role: 'ok',
            handler: () => {
              var target = event.srcElement;

              target.innerHTML = 'Request<br>Sent';
            }
          },
          {
            text: 'No',
            handler: () => {
              var target = event.srcElement;
              target.innerHTML = 'Add Friend';
            }
          }
        ]
      });
      alert.present();
  }
  openChat(chat){
    this.navCtrl.push(Chats, {
      chatName: chat
    });
  }
}