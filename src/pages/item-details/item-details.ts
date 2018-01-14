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
  videos : any = {};
  trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams,youtubeProvider:YoutubeProvider,
    private domSanitizer: DomSanitizer) {
    this.videos= youtubeProvider.video_id_array;
    

    console.log(this.videos)
    // If we navigated to this page, we will have an item available as a nav param
    
    this.selectedItem = navParams.get('item');
   /* let disconnectSub = Network.onDisconnect().subscribe(() => {
      console.log('you are offline');
    });*/

   /* let connectSub = Network.onConnect().subscribe(()=> {
      console.log('you are online');
    });*/
  }
  ionViewWillEnter(): void {
    console.log(this.domSanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/XHCVWWsQmUs'));
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos.videourl);
  } 
}
