import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../Services/LandlordServices/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute,private user:UsersService,private route:Router,private formBuilder:FormBuilder,private snackbar:MatSnackBar) { }
   EditProperty!:FormGroup;
  submitted=false;
  PropertyId:any;
  GetProperty:any;


  ngOnInit(): void {
    console.log(this.activeroute.snapshot.paramMap.get('PropertyId'));
    this.PropertyId=this.activeroute.snapshot.paramMap.get('PropertyId');

     this.GetPropertyById(this.PropertyId);

    this.EditProperty=this.formBuilder.group({
      PropertyName: new FormControl(),
      SqureFeet: new FormControl(),
      RentalCost: new FormControl(),
      City: new FormControl(),
      Location: new FormControl(),
      Type: new FormControl(),
      LandLordName: new FormControl(),
      PropertyImage: new FormControl()
    })
  }

  GetPropertyById(PropertyId:any)
  {
    this.user.getpropertyById(PropertyId).subscribe((Response:any)=>
    {
      this.GetProperty=Response.Data;
      console.log(this.GetProperty);
      this.setValues();
    })
  }

setValues(){
  this.EditProperty.controls['SqureFeet'].setValue(this.GetProperty.SqureFeet);
  this.EditProperty.controls['PropertyName'].setValue(this.GetProperty.PropertyName);
  this.EditProperty.controls['RentalCost'].setValue(this.GetProperty.RentalCost);
  this.EditProperty.controls['City'].setValue(this.GetProperty.City);
  this.EditProperty.controls['Location'].setValue(this.GetProperty.Location);
  this.EditProperty.controls['Type'].setValue(this.GetProperty.Type);
  this.EditProperty.controls['LandLordName'].setValue(this.GetProperty.LandLordName);
  this.EditProperty.controls['PropertyImage'].setValue(this.GetProperty.PropertyImage);
}
  onSubmit()
  {
    this.submitted=true;
    if(this.EditProperty.invalid)
    {
      return;
    }
    
    let reqData={
      Propertyname:this.EditProperty.value.PropertyName,
      SquareFeet:this.EditProperty.value.SqureFeet,
        RentalCost:this.EditProperty.value.RentalCost,
        City:this.EditProperty.value.City,
        Location:this.EditProperty.value.Location,
        Type:this.EditProperty.value.Type,
        LandLordName:this.EditProperty.value.LandLordName,
        PropertyImage:this.EditProperty.value.PropertyImage,
    }
   
    console.log("Suresh",reqData);


    this.user.UpdateProperty(this.PropertyId,reqData).subscribe((Response:any)=>
    {
      console.log(Response);
      this.route.navigateByUrl("/MyProperties");

    })
  }

}
