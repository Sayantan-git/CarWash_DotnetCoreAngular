import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseUrl = environment.baseUrl; 
  apiurl = this.baseUrl + '/api/user/signup';

  constructor(private http: HttpClient) { }

  proceedSignup(usercred:any){
    return this.http.post(this.apiurl, usercred)
  }
}
