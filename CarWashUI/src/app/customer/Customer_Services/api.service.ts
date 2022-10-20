import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl; 


  ViewInvoive(id:number){
    return this.http.get(this.baseUrl + "/api/ViewInvoice?id=" + id)

  }

}
