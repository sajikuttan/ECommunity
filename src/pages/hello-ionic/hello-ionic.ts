import { DomSanitizer } from '@angular/platform-browser';
import { VideoPlayer } from '@ionic-native/video-player';
// import { Http } from '@angular/http';
// import {
//     SpeechRecognition,
//     SpeechRecognitionListeningOptionsAndroid,
//     SpeechRecognitionListeningOptionsIOS
// } from '@ionic-native/speech-recognition';
import { NavController, NavParams } from 'ionic-angular';

// import { NgZone } from '@angular/core';
// import { ToastController } from 'ionic-angular/umd';
import { Component } from '@angular/core';
// import {ApiAiClient} from "api-ai-javascript";


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  // speechList: Array<string> = [];
  // textmessage : string;
  // androidOptions: SpeechRecognitionListeningOptionsAndroid;
  // iosOptions: SpeechRecognitionListeningOptionsIOS;
  // client = new ApiAiClient({accessToken: '908415e3087c4a66afe961857aca8099'});
  constructor(public navCtrl: NavController, public navParams: NavParams, public videoPlayer: VideoPlayer, public dom : DomSanitizer) {
    // Check feature available

    // Start the recognition process
    // this.speechRecognition.startListening(options)
    // .subscribe(
    //     (matches: Array<string>) => console.log(matches),
    //     (onerror) => console.log('error:', onerror)
    // )

    // // Stop the recognition process (iOS only)
    // this.speechRecognition.stopListening()

    // // Get the list of supported languages
    // this.speechRecognition.getSupportedLanguages()
    // .then(
    //     (languages: Array<string>) => console.log(languages),
    //     (error) => console.log(error)
    // )

    // // Check permission
    // this.speechRecognition.hasPermission()
    // .then((hasPermission: boolean) => console.log(hasPermission))

    // // Request permissions
    // this.speechRecognition.requestPermission()
    // .then(
    //     () => console.log('Granted'),
    //     () => console.log('Denied')
    // )
  }

  playVideo(){
    return (this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=0jamhGf-8ww'));
  }
  // RecordSpeech(){
  //   this.androidOptions = {
  //   prompt: 'Speak into your phone!'
  // }
    
  //   this.androidOptions = {
  //     language: 'en-Es'
  //   }
  
  //   if (this.platform.is('android')) {
  //     this.speechRecognition.startListening(this.androidOptions).subscribe(data => this.speechList = data, error => console.log(error));
  //     // this.client.textRequest(this.speechList).then((response) => {}).catch((erorr) =>{});
  
  //   }
  //   else if (this.platform.is('ios')) {
  //     this.speechRecognition.startListening(this.iosOptions).subscribe(data => this.speechList = data, error => console.log(error));
  //   }
  // }
} 