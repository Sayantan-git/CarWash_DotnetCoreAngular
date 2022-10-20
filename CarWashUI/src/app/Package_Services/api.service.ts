import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl; 

  postPackage(data:any){
    return this.http.post<any>(this.baseUrl + "/Packages/", data);
  }

  getPackage(){
    return this.http.get<any>(this.baseUrl +  "/Packages/");
  }

  putPackage(data:any, packageId:number){

    return this.http.put(this.baseUrl + "/Packages/"+ packageId, data);

  }

  deletePackage(id:number){
    return this.http.delete<any>(this.baseUrl + "/Packages/" + id);
  }
}
