import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewinvoiceService {

  constructor(private http:HttpClient) { }
  
  baseUrl = environment.baseUrl; 

  apiurl = this.baseUrl + '/api/ViewInvoice?email=';

  ViewInvoice(){

    const email = localStorage.getItem('user');

    return this.http.get<any>(this.apiurl + email);
    
  }
}
