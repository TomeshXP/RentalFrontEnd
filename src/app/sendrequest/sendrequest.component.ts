import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
import { UsersService } from '../Services/LandlordServices/users.service';

@Component({
  selector: 'app-sendrequest',
  templateUrl: './sendrequest.component.html',
  styleUrls: ['./sendrequest.component.scss']
})
export class SendrequestComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private user:UsersService,private snack:MatSnackBar,private route:Router) { }
  BuyerId:any;
  SellerId:any;
  LandLordInfo:any;
  RentAmount:any;
  SecurityDeposit:any;
  PropertyId:any;
  LandLordName:any;
 
  ngOnInit(): void {
    this.BuyerId=localStorage.getItem('RentarId');
    this.PropertyId=this.data.ProperyId;
    this.LandLordName=this.data.LandLordName;
    this.RentAmount=150000;
    this.SecurityDeposit=5000;
    this.SellerId=this.data.RentarId;
   

    console.log('RentarId',this.data.RentarId);
    console.log('PropertyId',this.data.ProperyId);
  }

  Agree()
  {
    let reqData={
      BuyerId:this.BuyerId,
      SellerId:this.SellerId,
      LandLordName:this.LandLordName,
      PropertyId:this.PropertyId,
      RentAmount:this.RentAmount,
      SecurityDeposit:this.SecurityDeposit
    }

    this.user.SendRequestService(reqData).subscribe((Response:any)=>{
      console.log(Response.Data);
    })


  }

  

 

}
