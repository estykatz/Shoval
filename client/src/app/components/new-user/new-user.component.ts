import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/validators/userpassword.validator';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  myForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[א-ת]{1}[א-ת ]*')])),
      password: new FormControl('', Validators.compose([Validators.required])),
      rightpassword: new FormControl('', Validators.compose([Validators.required, passwordValidator('password', 'rightpassword')]))
    });
  }
}
