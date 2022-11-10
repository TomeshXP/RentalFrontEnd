import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsersService } from '../Services/LandlordServices/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usernamep=false;

  register!: FormGroup;
  submited = false;
  constructor(private formBuilder:FormBuilder,private userservice:UsersService,private snackbar:MatSnackBar,private route:Router) { }

  UserPattern = "^[A-Z][A-Za-Z]{2,20}$";
  EmailPattern="^([A-Za-z0-9]{3,20})([.][A-Za-z0-9]{1,10})*([@][A-Za-z]{2,5})+[.][A-Za-z]{2,3}([.][A-Za-z]{2,3})?$";
 MobilePattern="^[5-9][0-9]{9}$";
  ngOnInit(): void {
    this.register = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required,Validators.minLength(6)],
      ConfirmPassword: ['', Validators.required,Validators.minLength(6)],
      Email: ['', Validators.required],
      Number: ['', Validators.required],
      Address:['',Validators.required],
      Image:['',Validators.required]

      
    });

    
  }
  

  onSubmit() {
    console.log("Clicked");
    
    this.submited = true;

    if (this.register.invalid) {
      return;
  
    }
    let reqData = {
      UserName: this.register.value.Username,
      Password: this.register.value.Password,
      ConfirmPassword: this.register.value.ConfirmPassword,
      Email: this.register.value.Email,
      Number:this.register.value.Number,
      Address:this.register.value.Address,
      Image:this.register.value.Image,
      
    }
    console.log(reqData);
    this.userservice.registration(reqData).subscribe((response: any) => {
        console.log(response);
        this.snackbar.open('Login Sucessfully...!','',{
          duration: 3000
        });
       this.route.navigateByUrl('/Login') 
       })
     }

}

