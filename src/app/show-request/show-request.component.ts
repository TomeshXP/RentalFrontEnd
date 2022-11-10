import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../Services/LandlordServices/users.service';


@Component({
  selector: 'app-show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.scss']
})
export class ShowRequestComponent implements OnInit {

  constructor(private userservice:UsersService,private activeroute:ActivatedRoute) { }
PropertyId:any;
status:any;
  getRequestArray:any;
  ngOnInit(): void {
this.PropertyId=this.activeroute.snapshot.paramMap.get("PropertyId");
this.GetRequest();
  }

  GetRequest()
  {
   this.userservice.getRequest(this.PropertyId).subscribe((Response:any)=>{
     console.log(Response);
     this.getRequestArray=Response.Data;
     console.log(this.getRequestArray);  
     
   })

  }




}
