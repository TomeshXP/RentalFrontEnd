import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
RentarIdd:any;
UserName:any;
  ngOnInit(): void {
    this.RentarIdd= localStorage.getItem('RentarId');
    this.UserName=localStorage.getItem('UserName');
  }

  

}
