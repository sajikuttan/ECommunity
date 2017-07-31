import { Component } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  videoUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/2KOxZtLxdK4');
    this.selectedItem = navParams.get('item');
  }
}
