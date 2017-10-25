import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
/*
  Generated class for the NewsBlogs provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NewsBlogs {
	cards: Array<any>;
	constructor(public http: Http,private storage:Storage) {
	    console.log('Hello NewsBlogs Provider');
	}

	setData() {
		let newsArray;
				this.http.get('https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=102e891928fc4d1186c84da5ca4572d1')
			    .map(res => res.json())
			    .subscribe(data => {
			        this.storage.set('techcrunch',data['articles']);
			    });
	    
	    return 1;
	}
    //get the stored email
	getData(){
		let arr;
		this.storage.get('engadget').then((data)=>{arr = data});
		console.log(arr);
		return this.cards;
	}

	//delete the email address
	removeData(){
	this.storage.remove('techcrunch').then(()=>{
			console.log('email is removed');
		});
	}

	//clear the whole local storage
	clearStorage(){
		this.storage.clear().then(()=>{
		console.log('all keys are cleared');
		});
	}

}
