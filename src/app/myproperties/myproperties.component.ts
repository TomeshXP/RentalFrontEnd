import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../Services/LandlordServices/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.scss']
})
export class MypropertiesComponent implements OnInit {

  constructor(private user:UsersService,private route:Router,private snackbar:MatSnackBar) { }
  MyPropertyArray:any;
  RentarIdd:any;
  UserName:any;
  ngOnInit(): void {
    this.RentarIdd= localStorage.getItem('RentarId');
    this.UserName=localStorage.getItem('UserName');
    console.log("Tomesh Rentar Id",this.RentarIdd);
    this.user.getMyProperty(this.RentarIdd).subscribe((Response:any)=>{
      console.log(Response);
      this.MyPropertyArray=Response.Data;
    })
  }

  DeleteProp(deleteprop:any)
  {
    if(confirm('Are You Sure To Delete This Record'))
    {
    console.log(deleteprop);
    this.user.deletePropery(deleteprop).subscribe((Response:any)=>{
      console.log(Response);
      alert('Record Deleted Successfully...!');
      window.location.reload();
    })
  }
  else
  {
    window.location.reload();
  }
  }


}
