import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { Http ,Headers} from '@angular/http';
import { Technology } from '../technology/technology';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  isValid = false;
  technologies = ['C#','C','JAVA','HTML','PYTHON','SQL','CSS'];
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public http:Http) {
  
  }

  presentTechnologyModal() {
    let profileModal = this.modalCtrl.create(Technology);
    profileModal.present();
  }

  deleteItem($event, item){
    this.isValid = true;
  }
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
