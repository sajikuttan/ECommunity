// import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import {
    SpeechRecognition,
    SpeechRecognitionListeningOptionsAndroid,
    SpeechRecognitionListeningOptionsIOS
} from '@ionic-native/speech-recognition';
// import { NgZone } from '@angular/core';
// import { NavController, Platform, ToastController } from 'ionic-angular/umd';
import { Component } from '@angular/core';
// import {ApiAiClient} from "api-ai-javascript";


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  speechList: Array<string> = [];
  textmessage : string;
  androidOptions: SpeechRecognitionListeningOptionsAndroid;
  iosOptions: SpeechRecognitionListeningOptionsIOS;
  // client = new ApiAiClient({accessToken: '908415e3087c4a66afe961857aca8099'});
  constructor(private speechRecognition: SpeechRecognition,private platform: Platform) {
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

  addUser(){
    alert("Called")
    var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
    // var data = JSON.stringify({username: this.data['username']});
    
    // this.http.post(link, data)
    // .subscribe(data => {
    //     console.log('Done');
    // }, error => {
    //     console.log("Oooops!");
    // });
  }

  RecordSpeech(){
    this.androidOptions = {
    prompt: 'Speak into your phone!'
  }
    
    this.androidOptions = {
      language: 'en-Es'
    }
  
    if (this.platform.is('android')) {
      this.speechRecognition.startListening(this.androidOptions).subscribe(data => this.speechList = data, error => console.log(error));
      // this.client.textRequest(this.speechList).then((response) => {}).catch((erorr) =>{});
  
    }
    else if (this.platform.is('ios')) {
      this.speechRecognition.startListening(this.iosOptions).subscribe(data => this.speechList = data, error => console.log(error));
    }
  }
  // ReplySpeech(message){
  //   switch(message){
  //     case 'hello' : this.textmessage = 'Hello';
  //                     break;
  //     case 'how are you' : this.textmessage = 'I Am Fine How Are You';
  //                     break;
  //     default : this.textmessage = 'Thank You';
  //   }
  //   return this.textmessage;
  // }
} 