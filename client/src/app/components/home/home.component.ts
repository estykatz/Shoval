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
  isAdmin: Boolean;
  data = true;
  parentData: any;
  currentUser: any;
  constructor(private loginService: LoginService, private helpService: HelpService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.IsLogin;
    this.subscribed = this.loginService.loginchange.subscribe(val => this.loggedIn = val);

    this.isAdmin = this.helpService.getRoleLogedIn();
    console.log('isAdmin');
    console.log(this.loginService.CurrentUser);

    console.log(this.loggedIn);

  }
  getRole() {
    this.currentUser = this.loginService.CurrentUser;
    console.log('currentuser');
    console.log(this.currentUser[0].admin);
    if (this.currentUser[0].admin) {
      return 1;
    }
    return 0;
  }
  ngOnDestroy() {
    this.subscribed.unsubscribe();
  }
  logOut() {
    this.loginService.SetCurrentUser(undefined);
  }
}
