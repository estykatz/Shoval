import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { identityValidator } from 'src/app/validators/Identity.validator';
import { identity, from } from 'rxjs';
import { Payment } from 'src/app/models/payment';
import { PaymentsService } from 'src/app/services/payments.service';
import { sisterAndBrotherValidator } from 'src/app/validators/sisterandbrother.validator';
import { HelpService } from 'src/app/services/help.service';
import { Registratio } from 'src/app/models/registratio';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  myForm: FormGroup;
  u: boolean;
  d: Date = new Date();
  student: Registratio;
  constructor(private paymentService: PaymentsService, private helpService: HelpService) { }



  ngOnInit(): void {
    this.student = this.helpService.getData();
    console.log('student!!!!!!!!!!!!!!!');
    console.log(this.student);

    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[א-ת]{1}[א-ת ]*')])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[א-ת]{1}[א-ת ]*')])),
      phone: new FormControl('', Validators.required),
      price: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{0,}$')])),
      datee: new FormControl('', Validators.required),
      // identity: new FormControl('', Validators.compose([Validators.required, identityValidator(),
      // Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]{0,}$')])),
      CardOrCash: new FormControl(''),
      mapalim: new FormControl(''),
      shoval: new FormControl('')
    }, sisterAndBrotherValidator(['firstName', 'lastName', 'phone']));
    this.SisterAndBrother();
    console.log('dayyyyyyyyy');
    console.log(this.d.toLocaleString().split(',')[0]);

    console.log(this.d.getDate());

    this.myForm.controls.datee.setValue(this.d.toLocaleString().split(',')[0]);
  }
  errorsab() {
    console.log('eerrors');
    console.log(this.myForm.errors?.SandB);
  }
  addNewPayment(shoval, mapalim, card, cash) {
    console.log('addnew');

    if (this.myForm.valid) {
      console.log('if');
      const p = new Payment();
      p.FirstName = this.myForm.controls.firstName.value;
      p.LastName = this.myForm.controls.lastName.value;
      p.PhoneNumber = this.myForm.controls.phone.value;
      p.PriceToStudent = this.myForm.controls.price.value;
      p.datee = this.myForm.controls.date.value;
      console.log(p.datee);

      p.Sum = this.myForm.controls.price.value;
      if (shoval) {
        p.PaymentTransfer = true;
      }
      if (mapalim) {
        p.PaymentTransfer = false;
      }
      if (card) {
        p.WayofPayment = 1;
      }
      if (cash) {
        p.WayofPayment = 0;
      }

      // p.WayofPayment = this.myForm.controls.CardOrCash.value;
      // if (this.myForm.controls.shoval.touched) {
      //   p.PaymentTransfer = this.myForm.controls.shoval.value;
      // }
      // if (this.myForm.controls.mapalim.touched) {
      //   p.PaymentTransfer = this.myForm.controls.mapalim.value;
      // }


      this.paymentService.createPayment(p).subscribe(ans => {
        console.log(ans);

        this.myForm.reset();
      });
    }


  }

  SisterAndBrother() {

    if (this.myForm.errors?.SandB) {
      console.log('yeshiiiiiiiii');

      // this.myForm.controls.firstName.valid && this.myForm.controls.lastName.valid && this.myForm.controls.phone.valid

      if (this.myForm.controls.firstName.valid && this.myForm.controls.lastName.valid && this.myForm.controls.phone.valid) {
        const p = new Payment();

        p.FirstName = this.myForm.controls.firstName.value;
        p.LastName = this.myForm.controls.lastName.value;
        p.PhoneNumber = this.myForm.controls.phone.value;
        this.paymentService.SisterandBrother(p).subscribe(ans => {

          console.log('ans');
          console.log(ans);

          this.u = ans;
          if (this.u) {
            console.log('yes!!!!!!!!!!!!!!');
          }
        });



        //   this.u = ans;
        // });

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

}
