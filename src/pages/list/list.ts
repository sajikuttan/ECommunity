import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { Http ,Headers} from '@angular/http';
import { Technology } from '../technology/technology';
import { YoutubeProvider } from '../../providers/youtube/youtube';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  isValid = false;
  technologies = [{
      name:'C',
      id:'PL6gx4Cwl9DGAKIXv8Yr6nhGJ9Vlcjyymq'
    },
    {
      name:'ASP',
      id:'PLS1QulWo1RIaM8-S7kTHgWd_pGNu-CyQS'
    },
    {
      name:'JAVA',
      id:'PLFE2CE09D83EE3E28'
    },
    {
      name:'PYTHON',
      id:'PL6gx4Cwl9DGAcbMi1sH6oAMk4JHw91mC_'
    },
    {
      name:'PHP',
      id:'PL442FA2C127377F07'
    },
    {
      name:'SQL',
      id:'PLEA1DCF3A832EB215'
    },
    {
      name:'HTML',
      id:'PLC1322B5A0180C946'
    },
    {
      name:'ANGULAR JS',
      id:'PL6gx4Cwl9DGBYxWxJtLi8c6PGjNKGYGZZ'
    },
    {
      name:'REACT JS',
      id:'PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA'
    },
    {
      name:'JAVASCRIPT',
      id:'PL46F0A159EC02DF82'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public http:Http,public youtubeProvider:YoutubeProvider) {
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
