<<<<<<< HEAD
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
=======
// import { userInfo } from "os";

// @Injectable({
//     providedIn:'root'
// })

// export class LoginService{
//     private newUser=undefined;
//    LoginChange:subject<boolean>=new subject<boolean>;
//     constructor(){

//     }
//     get IsLogin(){
//         return this.newUser=User;
//     }
//     get newUser(){
//         return this.newUser;
//     }


//     setNewUser(user){
// this.newUser=user;
//         if(user!==undefined){
//             this.loginChange.next(true);
//         }
// else{
//     this.loginChange.next(false)
// }
//        }


// }
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
