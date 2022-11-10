import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsersService } from '../Services/LandlordServices/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproperties',
  templateUrl: './addproperties.component.html',
  styleUrls: ['./addproperties.component.scss']
})
export class AddpropertiesComponent implements OnInit {

  
RentarIdd:any;

  constructor(private formBuilder:FormBuilder,private userservice:UsersService,private snackbar:MatSnackBar,private route:Router) { }
  addproperties!:FormGroup;
  submited=false;
  ngOnInit(): void {
    this.addproperties=this.formBuilder.group({
      PropertyName:['',Validators.required],
      SqureFeet:['',Validators.required],
      RentalCost:['',Validators.required],
      City:['',Validators.required],
      Location:['',Validators.required],
      Type:['',Validators.required],
      LandLordName:['',Validators.required],
      PropertyImage:['',Validators.required]
      
    })
    this.RentarIdd= localStorage.getItem('RentarId');
    console.log("Tomesh Rentar Id",this.RentarIdd);
  }


  onSubmit()
  {
this.submited=true;

if(this.addproperties.invalid)
{
  return;
}
let reqData={
  PropertyName:this.addproperties.value.PropertyName,
  SqureFeet:this.addproperties.value.SqureFeet,
  RentalCost:this.addproperties.value.RentalCost,
  City:this.addproperties.value.City,
  Location:this.addproperties.value.Location,
  Type:this.addproperties.value.Type,
  LandLordName:this.addproperties.value.LandLordName,
  PropertyImage:this.addproperties.value.PropertyImage,
  RentarId:this.RentarIdd
}
console.log(reqData);
this.userservice.addproperty(reqData).subscribe((response: any) => {
  console.log(response);
//  this.snackbar.open("Property Added Successfully","", {
//    duration: 2000,
//  });
 this.addproperties.reset(); 
 this.route.navigateByUrl("/Landlord");
 })
}
  }


