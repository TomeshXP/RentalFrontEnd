import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersService } from '../Services/LandlordServices/users.service';
import { ShowRequestComponent } from '../show-request/show-request.component';

@Component({
  selector: 'app-addlandlord',
  templateUrl: './addlandlord.component.html',
  styleUrls: ['./addlandlord.component.scss']
})
export class AddlandlordComponent implements OnInit {
RentarIdd:any;
UserName:any;
getRequestArray:any;

  constructor(private userservice:UsersService,private route:Router,private dialog:MatDialog) { }
  MyPropertyArray:any;
  ngOnInit(): void {
    this.RentarIdd= localStorage.getItem('RentarId');
    this.UserName=localStorage.getItem('UserName');
    console.log("Tomesh Rentar Id",this.RentarIdd);
    this.userservice.getMyProperty(this.RentarIdd).subscribe((response: any) => {
      console.log(response.Data);
   this.MyPropertyArray=response.Data;

     })
   }

   DeleteProp(deleteprop:any)
   {
     if(confirm('Are You Sure To Delete This Record'))
     {
     console.log(deleteprop);
     this.userservice.deletePropery(deleteprop).subscribe((Response:any)=>{
       console.log(Response);
       alert('Record Deleted Successfully...!');
       window.location.reload();
     })
   }
   else
   {
     
   }
   }

 


  }


