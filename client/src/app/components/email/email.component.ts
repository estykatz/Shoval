import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import {Email} from 'src/app/models/email';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  myForm: FormGroup;
  email: string;
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.email)
    })
  }
  sendEmail() {
    const newemail=new Email();
    newemail.email= this.myForm.controls.email.value;
    this.emailService.addEmail(newemail).subscribe(ans=>{
      console.log(ans);
      this.myForm.reset();
    })
  }
}
