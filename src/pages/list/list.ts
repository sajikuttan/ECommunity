import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { AlertController } from 'ionic-angular';
import { Technology } from '../technology/technology';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  language : string;
  isValid = false;
  technologies:any;
  url = "/technologies";
  constructor(public navCtrl: NavController, public navParams: NavParams,public databaseProvider: DatabaseProvider,public alerCtrl: AlertController,public modalCtrl: ModalController) {
    this.language = "selected-language";
    this.technologies = databaseProvider.getTechnologies();
  }
  technologyData(){
    return this.technologies;
  }

  presentTechnologyModal() {
    let profileModal = this.modalCtrl.create(Technology);
    profileModal.present();
  }

  doConfirm(technology) {
    let confirm = this.alerCtrl.create({
      title: 'ADD Course',
      message: 'Do You Want To Add '+ technology + ' Course?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
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
