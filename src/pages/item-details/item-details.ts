import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
  yuId:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private youtubeProvider:YoutubeProvider,
    private domSanitizer: DomSanitizer) {
      // youtubeProvider.getVideoChannel();
      this.yuId = this.navParams.get('item').id;
      console.log(this.yuId);
      this.youtubeProvider.setYoutubeId(this.yuId);
      this.getArrayOfIds();
      this.selectedItem = navParams.get('item');
  }
  async getArrayOfIds(){
    // this.videos = this.youtubeProvider.video_id_array;
    // console.log(this.youtubeProvider.video_id_array);
    this.yuId = this.navParams.get('item').id;
    await this.youtubeProvider.setYoutubeId(this.yuId);
    for(let entry of this.youtubeProvider.video_id_array){
      this.videos.push("https://www.youtube.com/embed/"+entry);
    }
  }
}
