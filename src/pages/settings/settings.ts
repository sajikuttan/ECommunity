import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public isToggled: boolean;
  userData={};

  constructor(public navCtrl: NavController, public navParams: NavParams,private settings: SettingsProvider,public storage: Storage) {
    this.storage.get('toggle-value').then((result) => {
      this.isToggled = result;
      if(result){
        document.getElementById('theme-name').innerHTML= 'Dark Mode';
      }else{
        document.getElementById('theme-name').innerHTML= 'Light Mode';
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  changeTheme() {
    var theme;
    this.storage.get('theme-store').then((result) => {
      theme = result;
    });
    if (this.isToggled || theme == 'dark-theme') {
      this.settings.setActiveTheme('dark-theme');
      this.storage.set('theme-store', 'dark-theme');
      this.isToggled = true;
      this.storage.set('toggle-value', true);
      document.getElementById('theme-name').innerHTML= 'Dark Mode';
    } else {
      this.settings.setActiveTheme('light-theme');
      this.storage.set('theme-store', 'light-theme');
      this.storage.set('toggle-value', false);
      document.getElementById('theme-name').innerHTML= 'Light Mode';
    }
  }

}
