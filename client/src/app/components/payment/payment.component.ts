import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { identityValidator } from 'src/app/validators/Identity.validator';
import { identity, from } from 'rxjs';
import { Payment } from 'src/app/models/payment';
import { PaymentsService } from 'src/app/services/payments.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  myForm: FormGroup;
  constructor(private paymentService: PaymentsService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[א-ת]{1}[א-ת ]*')])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[א-ת]{1}[א-ת ]*')])),
      phone: new FormControl('', Validators.required),
      price: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{0,}$')])),
      date: new FormControl('', Validators.required),
      // identity: new FormControl('', Validators.compose([Validators.required, identityValidator(),
      // Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]{0,}$')])),
      CardOrCash: new FormControl(''),
      mapalim: new FormControl(''),
      shoval: new FormControl('')
    });
  }
  addNewPayment() {
    console.log('addnew');

    if (this.myForm.valid) {
      console.log('if');
      const p = new Payment();
      p.FirstName = this.myForm.controls.firstName.value;
      p.LastName = this.myForm.controls.lastName.value;
      p.PhoneNumber = this.myForm.controls.phone.value;
      p.PriceToStudent = this.myForm.controls.price.value;
      p.date = this.myForm.controls.date.value;
      p.Sum = this.myForm.controls.price.value;
      // p.WayofPayment = this.myForm.controls.CardOrCash.value;
      // if (this.myForm.controls.shoval.touched) {
      //   p.PaymentTransfer = this.myForm.controls.shoval.value;
      // }
      // if (this.myForm.controls.mapalim.touched) {
      //   p.PaymentTransfer = this.myForm.controls.mapalim.value;
      // }
      console.log('paymentcomponent');
      this.paymentService.createPayment(p).subscribe(ans => {

        this.myForm.reset();
      });
    }

  }
}
///

// addNewUser() {
//   if (this.myForm.invalid) {
//     const u = new NewUser();
//     u.password = this.myForm.controls.password.value;
//     u.userName = this.myForm.controls.name.value;
//     u.userAdmin = 0;
//     u.email = this.myForm.controls.email.value;
//     this.userService.createUser(u).subscribe(ans => {

//       this.myForm.reset();
//     });

///
