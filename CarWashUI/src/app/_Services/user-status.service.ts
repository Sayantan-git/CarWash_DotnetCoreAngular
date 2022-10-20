import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  baseUrl = environment.baseUrl; 

  apiurl =this.baseUrl + '/api/User/';

  constructor(private http:HttpClient) { }

  changeStatus(userstatus:any){
    return this.http.post(this.apiurl,userstatus);
    
  }
}
