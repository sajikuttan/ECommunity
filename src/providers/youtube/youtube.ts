import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the YoutubeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YoutubeProvider {
  channel_arr:JSON;
  video_id_array =[];
  constructor(public http: HttpClient) {
    
  }
  setYoutubeId(yid){
    this.getVideos(yid);
  }
  getVideoChannel(){
    var url ="https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=thenewboston&key=AIzaSyABOMA1sECLaBejkrK2MjOgsBGI2sZd5fk";
    this.http.get(url)
    .map(res => res as JSON)
    .subscribe(data => {
      for (var key in  data['items']) {
        console.log(data['items']);
        if ( data['items'].hasOwnProperty(key)) {
          var yid =  data['items'][key].contentDetails.relatedPlaylists.uploads;
          console.log(yid);
          this.getVideos(yid);
        }
      }
    }, error => {
        alert(error);
    });
  }
  getVideos(yid){
    var arr = [];
    var url ="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+yid+"&maxResults=10&forUsername=thenewboston&key=AIzaSyABOMA1sECLaBejkrK2MjOgsBGI2sZd5fk";
    this.http.get(url)
    .map(res => res as JSON)
    .subscribe(data => {
      for (var key in  data['items']) {
        if ( data['items'].hasOwnProperty(key)) {
          var vedio_id =  data['items'][key].snippet.resourceId.videoId;
          arr['video']  = "www.youtube.com/embed/"+vedio_id;
          this.video_id_array.push(vedio_id);
        }
      }
    }, error => {
        alert(error);
    });
  }
}
