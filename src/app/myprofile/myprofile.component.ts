import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UsersService } from '../Services/LandlordServices/users.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  constructor(private user:UsersService,private matDialog:MatDialog) { }
RentarId:any;
MyProfileArray:any;

  ngOnInit(): void {
    this.RentarId=localStorage.getItem("RentarId");
    console.log("RentarId",this.RentarId);

    this.GetMyProfile(this.RentarId);
  }


  GetMyProfile(RentarId:any)
  {
    this.user.GetMyProfile(RentarId).subscribe((Response:any)=>{
      console.log(Response);
      this.MyProfileArray=Response.Data;
      console.log(this.MyProfileArray);
    })
  }

  openDialog():void{
    this.matDialog.open(EditProfileComponent,{
      width:'40%',
      data:{
        RentarId:this.RentarId
      }
    })
  }
}
