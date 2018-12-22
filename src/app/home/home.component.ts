import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public UserHours: any;
  constructor(private HomeReportService: HomeService) { }

  ngOnInit() {
    this.UserHours = Array.of(this.HomeReportService.getUserHours());
    console.log("this.UserHours[0]");
    console.log(this.UserHours[0]);
    console.log("this.UserHours[0]");
  }

}
