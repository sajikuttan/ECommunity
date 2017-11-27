import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Network } from 'ionic-native';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  url : 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4AI7E7TT163wSe1EghCk2hfKMw-LtJ2w&channelId=UChYheBnVeCfhCmqZfCUdJQw&part=snippet,id&order=date&maxResults=20';
  // https://www.youtube.com/channel/UChYheBnVeCfhCmqZfCUdJQw
  videos : any[] = [
          {
            title : 'Tutorial 1',
            videourl : 'https://www.youtube.com/embed/2KOxZtLxdK4'
          },
          {
            title : 'Tutorial 2',
            videourl : 'https://www.youtube.com/embed/2KOxZtLxdK4'
          },
          {
            title : 'Tutorial 3',
            videourl : 'https://www.youtube.com/embed/2KOxZtLxdK4'
          },
          {
            title : 'Tutorial 4',
            videourl : 'https://www.youtube.com/embed/2KOxZtLxdK4'
          },
          {
            title : 'Tutorial 5',
            videourl : 'https://www.youtube.com/embed/2KOxZtLxdK4'
          },
          {
            title : 'Tutorial 6',
            videourl : 'https://www.youtube.com/embed/2KOxZtLxdK4'
          },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.url);
    // If we navigated to this page, we will have an item available as a nav param
    
    this.selectedItem = navParams.get('item');
   /* let disconnectSub = Network.onDisconnect().subscribe(() => {
      console.log('you are offline');
    });*/

   /* let connectSub = Network.onConnect().subscribe(()=> {
      console.log('you are online');
    });*/
  }
}
