import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpsService } from '../HttpServices/https.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpServices:HttpsService) { }

  registration(reqData:any)
  {
    console.log(reqData);

    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpServices.postservice('/api/AddLandLord',reqData,false,header);
  }

  login(reqData:any)
  {
    console.log(reqData);

    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpServices.postservice('/api/LandlordLogin',reqData,false,header);
  }

  addproperty(reqData:any)
  {
    console.log(reqData);
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpServices.postservice('/api/AddProperty',reqData,false,header);
  }

  getAllProperty(RentarId:any)
  {
    let header={

      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpServices.getService(`/api/GetAllProperty/${RentarId}`,false,header);
  }

  getMyProperty(RentarId:any)
  {
    let header={
      Headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
      return this.httpServices.getService(`/api/getMyProperties/${RentarId}`,false,header);
    }

    deletePropery(PropertyId:any)
    {
      let header={
        Headers:new HttpHeaders({
          'Content-type':'application/json'
        })
      }
      return this.httpServices.deleteService(`/api/DeleteProperty/${PropertyId}`,false,header);
    }

    getpropertyById(PropertyId:any)
    {
      let header={
        Headers:new HttpHeaders({
          'Content-type':'application/json'
        })
      }
      
      return this.httpServices.getService(`/api/GetPropertyById/${PropertyId}`,false,header);
    }

    UpdateProperty(PropertyId:any,reqData:any)
    {
      let header={
        Headers:new HttpHeaders({
          'Content-type':'application/json'
        })
      }
        return this.httpServices.UpdateService(`/api/UpdateProperty/${PropertyId}`,reqData,false,header);
      }

      SendRequestService(reqData:any)
      {
        let header={
          Headers:new HttpHeaders({
            'Content-type':'application/json'
          })
        }
        return this.httpServices.postservice('/api/SendRequest',reqData,false,header);
      }
    

      getRequest(PropertyId:any)
      {
        let header={
          headers:new HttpHeaders({
            'Content-type':'application/json'
          })
        }
        return this.httpServices.getService(`/api/GetRequest/${PropertyId}`,false,header);
      }
    }
  

