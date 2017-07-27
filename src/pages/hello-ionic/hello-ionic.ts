import { ItemDetailsPage } from '../item-details/item-details';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoPlayer } from '@ionic-native/video-player';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  shownGroup = null;
  technologies = [];
  data = ['PHP','JAVA','MYSQL'];
  constructor(public navCtrl: NavController, public navParams: NavParams, public videoPlayer: VideoPlayer, public dom : DomSanitizer,public http: Http) {
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
    for(var i =0;i<this.data.length;i++){
        this.technologies.push({
            id: i,
            technology: this.data[i]
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