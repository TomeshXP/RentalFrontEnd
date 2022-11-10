import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from '../Services/LandlordServices/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private snackbar:MatSnackBar,private route:Router,private user:UsersService,private _fb:FormBuilder) { }
  EditProfile!:FormGroup;
  Submitted=false;

  MyprofileArray:any;
  RentarIdd:any;
  ngOnInit(): void {
    this.RentarIdd=this.data.RentarId
      console.log(this.data.RentarId)
      this.getMyProfile();

      this.EditProfile=this._fb.group({
        UserName:new FormControl(),
        Email:new FormControl(),
        Number:new FormControl(),
        Image:new FormControl(),
        Address:new FormControl()
      })
  }
  getMyProfile()
  {
    this.user.GetMyProfile(this.RentarIdd).subscribe((Response:any)=>{
      console.log('Sukant',Response.Data);
      this.MyprofileArray=Response.Data;
      this.setValue();
      console.log('Yogesh...',this.MyprofileArray);
    })
  }

  setValue()
  {
    this.EditProfile.controls['UserName'].setValue(this.MyprofileArray.UserName);
    this.EditProfile.controls['Email'].setValue(this.MyprofileArray.Email);
    this.EditProfile.controls['Number'].setValue(this.MyprofileArray.Number);
    this.EditProfile.controls['Address'].setValue(this.MyprofileArray.Address);
    this.EditProfile.controls['Image'].setValue(this.MyprofileArray.Image);
  }


  OnSubmit()
  {
    this.Submitted=true;
    if(this.EditProfile.invalid)
    {
      return;
    }
    let reqData={
      UserName:this.EditProfile.value.UserName,
      Email:this.EditProfile.value.Email,
      Number:this.EditProfile.value.Number,
      Address:this.EditProfile.value.Address,
      Image:this.EditProfile.value.Image
    }
    console.log('Tomesh',reqData);

    this.user.editProfile(this.RentarIdd,reqData).subscribe((Response:any)=>{
      console.log(Response);
      this.route.navigateByUrl('/dashboard');

    })
  }

}
