import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewWasherService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl; 
  

  getWashers(){
    return this.http.get<any>(this.baseUrl + "/api/ViewWasher");
  }

}
