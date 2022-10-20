import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl; 

  postCar(data:any){
    return this.http.post<any>(this.baseUrl + "/api/cars/", data);
  }

  getCar(){
    return this.http.get<any>(this.baseUrl + "/api/Cars/");
  }

  putCar(data:any, id:number){
    return this.http.put<any>(this.baseUrl + "/api/Cars/" + id, data);

  }

  deleteCar(id:number){
    return this.http.delete<any>(this.baseUrl + "/api/Cars/" + id);
  }
}

