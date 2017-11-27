import { QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  StackConfig,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';
import 'rxjs/Rx';
/**
 * Generated class for the Demo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class Demo {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
  
  cards: Array<any>;
  slidedCard: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }
  ionViewDidLoad() {
    this.addNewCards();
  }
  
  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });
  }
  onItemMove(element, x, y, r) {
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16*16 - abs, 16*16));
    let hexCode = this.decimalToHex(min, 2);
    
    if (x < 0) {
      color = '#FF' + hexCode + hexCode;
    } else {
      color = '#' + hexCode + 'FF' + hexCode;
    }
    
    element.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }
  
  // Connected through HTML
  bookmark(like: boolean) {   
    let removedCard = this.cards.pop();
    this.slidedCard = removedCard;
    console.log(removedCard);
    if (like) {
      console.log(like);
    } else {
      this.slidedCard;
    }
  }
  
  slideCards(like: boolean) {   
    let removedCard = this.cards.pop();
    this.slidedCard = removedCard;
    console.log(removedCard);
    if (like) {
      console.log(like);
    } else {
      this.slidedCard;
    }
  }
  // Add new cards to our array
  addNewCards() {
  }
  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
    
    while (hex.length < padding) {
      hex = "0" + hex;
    }
    
    return hex;
  }

}
