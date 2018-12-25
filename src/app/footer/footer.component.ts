import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private authService: LoginService, 
    private router: Router) { }

  ngOnInit() {
  }
  isAuthenticated() {
    var valid = this.authService.isAuthenticated();
    return valid;
  }
}
