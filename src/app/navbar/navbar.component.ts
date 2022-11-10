import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MyprofileComponent } from '../myprofile/myprofile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  LogOut()
  {
    localStorage.removeItem("RentarId");
    localStorage.removeItem("UserName");
    this.route.navigateByUrl("/Login");
  }

  openDialog(): void {
    this.dialog.open(MyprofileComponent, {
      width: '24%',    
      height:'52%'
    });
    
  }

}
