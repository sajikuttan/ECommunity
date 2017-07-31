import { ItemDetailsPage } from '../item-details/item-details';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
})
export class HelloIonicPage {
  shownGroup = null;
  technologies = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    // this.http.get('http://localhost/ElearnApp/technology.php')
    // .map(res => res.json())
    // .subscribe(data => {
    //     for(var i =0;i<data.length;i++){
    //       this.technologies.push({
    //           id: data[i].id,
    //           technology:data[i].technology
    //       });
    //     }
    //   });
    for(var i =0;i<this.technologies.length;i++){
        this.technologies.push({
            id: i,
            technology: this.technologies[i]
        });
    }
  }
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
  };
  navigateToList(){
      this.navCtrl.push(ListPage);
  }
} 