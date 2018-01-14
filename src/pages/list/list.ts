import { MyApp } from '../../app/app.component';
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { AlertController } from 'ionic-angular';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Technology } from '../technology/technology';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  language : string;
  isValid = false;
  technologies = [];
  url = "/technologies";
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public alerCtrl: AlertController,public modalCtrl: ModalController) {
    this.language = "selected-language";
    let headers = new Headers();

    headers.append('Accept', 'application/xml');
    headers.append('Authorization', 'Basic c2FqaWt1dHRhbjE5OTJAZ21haWwuY29tOmlubm92YXRpb24=');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Access-Control-Allow-Headers','*');

    this.http.get(MyApp.url+this.url,{headers : headers})
    .map(res => res.json())
    .subscribe(data => {
      this.technologies = data;
    }, error => {
        // alert(error);
    });
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
