import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  public technologies = [];
  technologies2 = [];
  language : string;
  isValid = false;
  data = ['PHP','JAVA','MYSQL'];
  data2 = ['ANGULAR','TYPESCRIPT','ASP','TESTING','CPP','C','PYTHON','RUBY'];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public alerCtrl: AlertController) {
    this.language = "selected-language";
    // this.http.get('http://localhost/ElearnApp/technology.php')
    // .map(res => res.json())
    // .subscribe(data => {
    //     for(var i =0;i<data.length;i++){
    //       this.technologies.push({
    //           id: data[i].id,
    //           technology:data[i].technology
    //       });
    //     }
    //   });
    var i:any;
    for(i =0;i<this.data.length;i++){
        this.technologies.push({
            id: i,
            technology: this.data[i]
        });
    }
    for(i =0;i<this.data2.length;i++){
        this.technologies2.push({
            id: i,
            technology: this.data2[i]
        });
    }
    
  }
  technologyData(){
    return this.technologies;
  }
  doConfirm(technology) {
    let confirm = this.alerCtrl.create({
      title: 'ADD Course',
      message: 'Do You Want To Add '+ technology + ' Course?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  deleteItem($event, item){
    this.isValid = true;
  }
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
