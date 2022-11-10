import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/LandlordServices/users.service';
import { MatDialog } from '@angular/material/dialog';
import { SendrequestComponent } from '../sendrequest/sendrequest.component';

@Component({
  selector: 'app-tanent',
  templateUrl: './tanent.component.html',
  styleUrls: ['./tanent.component.scss']
})
export class TanentComponent implements OnInit {

  constructor(private userservice:UsersService, private dialog: MatDialog) { }
  RentarIdd:any;
  UserName:any;
  PropertyArray:any;

  
  ngOnInit(): void {
    this.RentarIdd= localStorage.getItem('RentarId');
    this.UserName=localStorage.getItem('UserName');
    console.log("Tomesh Rentar Id",this.RentarIdd);
    this.userservice.getAllProperty(this.RentarIdd).subscribe((response: any) => {
      console.log(response.Data);
   this.PropertyArray=response.Data;
  })  
}

openDialog(Data:any): void {
  this.dialog.open(SendrequestComponent, {
    width: '45%',
    data:Data
    
  });

}


}


