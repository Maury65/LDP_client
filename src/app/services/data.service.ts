import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getProjects(){
    this.http.get('/api/Proj/').subscribe((res)=>{
        console.log(res);
    });
  }
}
