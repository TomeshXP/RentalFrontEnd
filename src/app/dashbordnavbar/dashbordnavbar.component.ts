import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbordnavbar',
  templateUrl: './dashbordnavbar.component.html',
  styleUrls: ['./dashbordnavbar.component.scss']
})
export class DashbordnavbarComponent implements OnInit {

  constructor() { }
RentarIdd:any;
UserName:any;
  ngOnInit(): void {
    this.RentarIdd= localStorage.getItem('RentarId');
    this.UserName=localStorage.getItem('UserName');
  }

}
