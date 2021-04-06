import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/validators/userpassword.validator';
import { UserService } from 'src/app/services/user.service';

import { NewUsers } from 'src/app/models/new-users';
import { Router } from '@angular/router';




@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  myForm: FormGroup;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      rightpassword: new FormControl('', Validators.compose([Validators.required]))
    }, passwordValidator(['password', 'rightpassword']));
  }
  addNewUser() {
    if (this.myForm.invalid) {
      const u = new NewUsers();
      u.password = this.myForm.controls.password.value;
      u.userName = this.myForm.controls.name.value;
      u.userAdmin = 0;
      u.email = this.myForm.controls.email.value;
      this.userService.createUser(u).subscribe(ans => {

        this.myForm.reset();
      });
      this.router.navigate(['/enter']);
    }
  }
  //     password: new FormControl('', Validators.compose([Validators.required,Validators.minLength(6)])),
  //     rightpassword: new FormControl('', Validators.compose([Validators.required]))
  //   }, passwordValidator(['password', 'rightpassword']));
  // }
  //  addNewUser() {
  //   if (this.myForm.valid) {
  //      const u = new NewUsers();
  //      u.password = this.myForm.controls.password.value;
  //      u.userName = this.myForm.controls.name.value;
  //      u.userAdmin = 0;
  //      u.email = this.myForm.controls.email.value;
  //      this.userService.createUser(u).subscribe(ans => {

  //        this.myForm.reset();
  //      });
  //    }
  //  }
}
