import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { HelpService } from 'src/app/services/help.service';
import { TokenizeOptions } from '@angular/compiler/src/ml_parser/lexer';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  myForm: FormGroup;
  right: User;
  logginid: any;
  trueOrFalsePassword = true;
  constructor(private userService: UserService, private loginService: LoginService, private tokenStorageService: TokenStorageService, private helpService: HelpService, private route: Router) { }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  CheckIftheRightUser() {

    if (this.myForm.valid) {
      console.log(this.right);

      const user = new User();
      user.userName = this.myForm.controls.userName.value;
      user.password = this.myForm.controls.password.value;

      this.userService.checkuser(user).subscribe((ans) => {
        this.right = ans;
        console.log(this.right[0]);

        if (this.right[0] !== undefined) {
          this.loginService.SetCurrentUser(this.right);
          this.trueOrFalsePassword = true;
          // this.tokenStorageService.saveToken(this.right[0])
          // this.tokenStorageService.saveUser(this.right[0]);
          this.logginid = this.helpService.getRoleLogedIn();
          this.tokenStorageService.signOut();


        }
        else {
          console.log("no!!gghghg");
          this.trueOrFalsePassword = false;
        }
        this.myForm.reset(); this.route.navigate(["allStudents"]);
      });
    }
  }


}
