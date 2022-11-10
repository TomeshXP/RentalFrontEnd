import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {
  baseUrl = environment.baseurl;

  constructor(private httpClient:HttpClient) { }
  postservice(url:string,reqData:any,token:boolean=false,httpOption:any={})
  {
    return this.httpClient.post(this.baseUrl+url,reqData,token && httpOption);
  }

  getService(url:string,token:boolean=false,httpOption:any={})
  {
    return this.httpClient.get(this.baseUrl+url,token && httpOption);
  }

  deleteService(url:string,token:boolean=false,httpOption:any={})
  {
    return this.httpClient.delete(this.baseUrl+url,token && httpOption);
  }

  UpdateService(url:string,reqData:any,token:boolean=false,httpOption:any={})
  {
    return this.httpClient.put(this.baseUrl+url,reqData,token && httpOption);
  }
}
