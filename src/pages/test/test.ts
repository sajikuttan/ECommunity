import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Test page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class Test {
  typeIndicator = false;
  chatMessages = [];
  options=['Booleans','Doubles','_FILE_','_FUNCTION_'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.typeIndicators();
    this.chatMessages.push(this.wishes());
  }
  questions(){
    var question =  ['Which of the following type of variables have only two possible values either true or false?','Which of the following magic constant of PHP returns function name?'];

    return question;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Test');
  }
  typeIndicators(){
    this.typeIndicator =true;
  }

  wishes(){
    var date = new Date().getHours();
    if (date < 12) {
      return 'Good Morning';
    } else if (date >= 12 && date <= 17) {
      return 'Good Afternoon';
    } else if (date > 17 && date <= 24) {
      return 'Good Evening';
    } else {
      return "I'm not sure what time it is!";
    }
  }

}
