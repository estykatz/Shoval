import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUser = undefined;
  loginchange: Subject<Boolean>=new Subject<Boolean>();
  constructor() { }

  get IsLogin() {
    return this.currentUser !== undefined;
  }
  get CurrentUser() {
    return this.currentUser;
  }
  SetCurrentUser(user){
    this.currentUser=user;
    if(user!==undefined){
      this.loginchange.next(true);
    }
    else{
      this.loginchange.next(false);
    }
  }
}
