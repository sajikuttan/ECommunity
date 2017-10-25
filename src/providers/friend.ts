import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Friend provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Friend {
  public peopleList = ['Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe','Jhon Doe'];
  constructor(public http: Http) {
    
  }
  load(){
  	this.peopleList;
  }
}
