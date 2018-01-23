import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage {

  headerTitle:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.headerTitle = navParams.get('projectType');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectListPage');
  }

}
