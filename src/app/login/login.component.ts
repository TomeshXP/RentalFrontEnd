import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsersService } from '../Services/LandlordServices/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login!: FormGroup;
  submited = false;
  constructor(private formBuilder:FormBuilder,private snackbar:MatSnackBar,private route:Router,private user:UsersService) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }


  RentarId:any;
  onSubmit() {
    this.submited = true;

    if (this.login.invalid) {
      return;
    }
    let reqData = {
      Email: this.login.value.Email,
      Password: this.login.value.Password,
    }
    this.user.login(reqData).subscribe((response: any) => {
      console.log("Tomesh",response.Data);
      console.log("RentarId",response.Data.RentarId);
      console.log("UserName",response.Data.UserName);
      this.RentarId=response.Data.RentarId;
      localStorage.setItem('RentarId', this.RentarId);
      localStorage.setItem('UserName',response.Data.UserName);

      this.snackbar.open('Login Sucessfully...!','',{
        duration: 3000
      });
      this.route.navigateByUrl('/dashboard') 
    })
  }

}
