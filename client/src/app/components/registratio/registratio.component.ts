import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { identityValidator } from 'src/app/validators/Identity.validator';
import { Registratio } from 'src/app/models/registratio';
@Component({
  selector: 'app-registratio',
  templateUrl: './registratio.component.html',
  styleUrls: ['./registratio.component.css']
})
export class RegistratioComponent implements OnInit {

  myForm: FormGroup;



  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      day: new FormControl('', Validators.required),
      hour: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      idnetity: new FormControl('', Validators.required),
      PlaseOfStudy: new FormControl('', Validators.required),
      hmo: new FormControl('', Validators.compose([Validators.required, identityValidator(),
      Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]{0,}$')]))
    });
  }
  addStudent() {
    if (this.myForm.valid) {
      const s = new Registratio();
      s.stFirstName = this.myForm.controls.firstname.value;
      s.stLastName = this.myForm.controls.lastName.value;
      s.phone = this.myForm.controls.phone.value;
      s.identity = this.myForm.controls.identity.value;
      s.PlaceOfStudy=this.myForm.controls.PlaceOfStudy.value;
      s.SwimmingLevels=this.myForm.controls.level.value;
      s.Debt=this.myForm.controls.
    }
  }
}
