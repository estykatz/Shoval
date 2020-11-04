import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/models/newUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  myForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    // CheckIftheRightUser(){
    //   if (this.myForm.valid) {
    //     const user = new NewUser();
    //     user.userName = this.myForm.controls.userName.value;
    //     user.password = this.myForm.controls.password.value;
    //     this.userService.getUser(user).subscribe(ans => {
    //       this.myForm.reset();
    //     })
    //   }
    // }
  }

}
