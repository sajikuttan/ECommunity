// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  headers:any;
  public url = "http://127.0.0.1:8000/en";
  constructor() {
    console.log('Hello DatabaseProvider Provider');
  } 

  httpConfiguration(){
    let  headers = new Headers();
    this.headers.append('Accept', 'application/xml');
    this.headers.append('Authorization', 'Basic c2FqaWt1dHRhbjE5OTJAZ21haWwuY29tOmlubm92YXRpb24=');
    this.headers.append('Access-Control-Allow-Credentials', 'true');
    this.headers.append('Access-Control-Allow-Origin','*');
    this.headers.append('Access-Control-Allow-Headers','*');
  }

  addProjectData(){

  }
  getTechnologies(){
    this.httpConfiguration();
    let technologies:any;
    this.http.get(this.url+'/technologies',{headers : this.headers})
    .map(res => res as JSON)
    .subscribe(data => {
      
      technologies= data;
    }, error => {
        console.log(error);
    });

    return technologies;
  }
  

}
