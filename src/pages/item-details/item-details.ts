import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Network } from 'ionic-native';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  urls_id_array=[];
  videos : any[] = [];
  trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams,private youtubeProvider:YoutubeProvider,
    private domSanitizer: DomSanitizer) {
    // If we navigated to this page, we will have an item available as a nav param
      this.getArrayOfIds();
      this.selectedItem = navParams.get('item');
    /* let disconnectSub = Network.onDisconnect().subscribe(() => {
        console.log('you are offline');
      });*/

    /* let connectSub = Network.onConnect().subscribe(()=> {
        console.log('you are online');
      });*/
  }
  ionViewWillEnter(): void {
  } 
  getArrayOfIds(){
    var arr = this.youtubeProvider.video_id_array;
    console.log(this.youtubeProvider.video_id_array);
    for(let entry of this.youtubeProvider.video_id_array){
      this.videos.push("https://www.youtube.com/embed/"+entry);
    }
  }
}
