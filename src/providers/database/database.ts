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
  technologies:any;
  public url = "http://127.0.0.1:8000/en";
  constructor(public http:Http) {
    this.technologies={};
  } 

  httpConfiguration(): Headers{
    let  headers = new Headers();
    headers.append('Accept', 'application/xml');
    headers.append('Authorization', 'Basic c2FqaWt1dHRhbjE5OTJAZ21haWwuY29tOmlubm92YXRpb24=');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Access-Control-Allow-Headers','*');
    return headers;
  }

  addProjectData(){

  }
  getTechnologies(){
    console.log(this.httpConfiguration());
    this.http.get(this.url+'/technologies',{headers : this.httpConfiguration()})
    .map(res => res.json())
    .subscribe((data) => {
      this.technologies = data;
    },error =>{
      console.log(error);
    });
    console.log(this.technologies);
    // this.http.get(this.url+'/technologies',{headers : this.headers})
    // .map(res => res as JSON)
    // .subscribe(data => {
      
    //   technologies= data;
    // }, error => {
    //     console.log(error);  
    // });
    
  }

}
