import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  technologies = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.http.get('http://localhost/ElearnApp/technology.php')
    .map(res => res.json())
    .subscribe(data => {
        for(var i =0;i<data.length;i++){
          this.technologies.push({
              id: data[i].id,
              technology:data[i].technology
          });
        }
      });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
