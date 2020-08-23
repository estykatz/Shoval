import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { identityValidator } from 'src/app/validators/Identity.validator';
import { identity, from } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  myForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[א-ת]{1}[א-ת ]*')])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[א-ת]{1}[א-ת ]*')])),
      price: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{0,}$')])),
      date: new FormControl('', Validators.required),
      identity: new FormControl('', Validators.compose([Validators.required, identityValidator(),
      Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]{0,}$')])),
      CardOrCash: new FormControl('')
    });
  }
}
