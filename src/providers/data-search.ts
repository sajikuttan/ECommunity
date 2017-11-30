import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataSearch provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataSearch {

 	items: any;
 	constructor(public http: Http) {
    	console.log('Hello DataSearch Provider');
  	}
  	setItems(items: any){
  		this.items = items;
  	}
 
	filterItems(searchTerm){
	    return this.items.filter((item) => {
	        return item.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
	    });    
	}

}
