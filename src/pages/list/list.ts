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
  technologies2 = [];
  language : any;
  data = ['PHP','JAVA','MYSQL'];
  data2 = ['ANGULAR','TYPESCRIPT','ASP','TESTING','CPP','C','PYTHON','RUBY'];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.language = "selected-language";
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
    var i:any;
    for(i =0;i<this.data.length;i++){
        this.technologies.push({
            id: i,
            technology: this.data[i]
        });
    }
    for(i =0;i<this.data2.length;i++){
        this.technologies2.push({
            id: i,
            technology: this.data2[i]
        });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
