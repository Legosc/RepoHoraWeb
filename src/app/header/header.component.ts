import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: LoginService, 
    private router: Router) { }

  ngOnInit() {
  }
  isAuthenticated() {
    var valid = this.authService.isAuthenticated();
    return valid;
  }
}
