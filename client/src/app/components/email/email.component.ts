import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import {Email} from 'src/app/models/email';
import { passwordValidator } from 'src/app/validators/userpassword.validator';
import { NewUsers } from 'src/app/models/new-users';
import { UserService } from 'src/app/services/user.service';
import { HelpService } from "src/app/services/help.service";
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  myForm: FormGroup;
  email: string;
  constructor(private emailService: EmailService,private userService:UserService,private helpService:HelpService) { }

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   email: new FormControl('', Validators.email)
    // })
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      rightpassword: new FormControl('', Validators.compose([Validators.required]))
    }, passwordValidator(['password', 'rightpassword']));
  }
  sendEmail() {
    const newemail=new NewUsers();
      newemail.password = this.myForm.controls.password.value;
      newemail.userName = this.myForm.controls.name.value;
      newemail.userAdmin = 0;
      newemail.email = this.myForm.controls.email.value;
      newemail.email= this.myForm.controls.email.value;
      this.emailService.addEmail(newemail).subscribe(ans=>{
      console.log(ans);
      this.myForm.reset();
      this.addNewUser(newemail);
    })
  }
  addNewUser(user) {
    if (this.myForm.invalid) {
      //const u = new NewUsers();
      // u.password = this.myForm.controls.password.value;
      // u.userName = this.myForm.controls.name.value;
      // u.userAdmin = 0;
      // u.email = this.myForm.controls.email.value;
      this.userService.createUser(user).subscribe(ans => {

        this.myForm.reset();
        this.helpService.getAllUsers();
      });
    //  this.router.navigate(['/enter']);
    }
  }
}
