import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  myForm: FormGroup;
  right=true;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  CheckIftheRightUser() {

    if (this.myForm.valid) {
      const user = new User();
      user.userName = this.myForm.controls.userName.value;
      user.password = this.myForm.controls.password.value;

      this.userService.checkuser(user).subscribe((ans) => {
      this.right=ans;
      console.log(this.right);

       if(this.right)
        {
          console.log("yes!!!!!!!!!!!!right");
        }
        else{
          console.log("no!!gghghg");
        }
        this.myForm.reset();
      });
    }
  }


}
