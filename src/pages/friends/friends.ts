import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public chats = ['Jhon Doe','Jhon Doe','Jhon Doe'];
  public friends = ['Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];
  public peopleList = ['Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
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
}