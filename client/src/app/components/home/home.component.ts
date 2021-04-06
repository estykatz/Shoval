import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelpService } from 'src/app/services/help.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  loggedIn;
  subscribed;
  isAdmin:Boolean;
  data=true;
  parentData:any;
  constructor(private loginService: LoginService,private helpService:HelpService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.IsLogin;
    this.subscribed = this.loginService.loginchange.subscribe(val => this.loggedIn = val);

    this.isAdmin=this.helpService.getRoleLogedIn();
    console.log(this.isAdmin);

  }
  ngOnDestroy() {
    this.subscribed.unsubscribe();
  }
}
