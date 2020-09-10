import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/validators/userpassword.validator';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  myForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[א-ת]{1}[א-ת ]*')])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required])),
      rightpassword: new FormControl('', Validators.compose([Validators.required]))
    }, passwordValidator(['password', 'rightpassword']));
  }
  addNewUser() {
    if (this.myForm.valid) {
      let u = newUser();
      u.name = this.myForm.controls.name.value;
      u.email = this.myForm.controls.email.value;
      u.password = this.myForm.controls.password.value;
      this.userService.createUser(u).subscribe(ans=>{

        this.myForm.reset();
      })
    }
  }
}
