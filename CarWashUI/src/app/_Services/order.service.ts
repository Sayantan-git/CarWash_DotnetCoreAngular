import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl; 

  apiurl = this.baseUrl + '/api/Orders/';
 

  OrderRequest(order:any){
    localStorage.setItem("order", order);
    return this.http.post(this.apiurl, order);
  }

  ViewOrderRequests(){
    return this.http.get<any>(this.apiurl);
  }

  ChangeOrderStatus(orderStatus:any){
    return this.http.put(this.apiurl+ 'Change', orderStatus);
  }

}
