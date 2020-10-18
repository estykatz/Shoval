import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { identityValidator } from 'src/app/validators/Identity.validator';
import { Registratio } from 'src/app/models/registratio';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-registratio',
  templateUrl: './registratio.component.html',
  styleUrls: ['./registratio.component.css']
})
export class RegistratioComponent implements OnInit {

  myForm: FormGroup;
  levelh: number;


  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      day: new FormControl('', Validators.required),
      hour: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      identity: new FormControl('', Validators.compose([Validators.required, identityValidator(),
      Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]{0,}$')])),
      PlaceOfStudy: new FormControl('', Validators.required),
      hmo: new FormControl(''),
      Remarks: new FormControl('')
    });
  }
  addNewStudent() {
    console.log('addStudent');

    if (this.myForm.invalid) {
      const s = new Registratio();
      console.log('first');
      s.stFirstName = this.myForm.controls.firstname.value;
      console.log('last');
      s.stLastName = this.myForm.controls.lastName.value;
      console.log('phone');
      s.phone = this.myForm.controls.phone.value;
      console.log('identity');
      s.identity = this.myForm.controls.identity.value;
      console.log('placeofstudy');
      s.PlaceOfStudy = this.myForm.controls.PlaceOfStudy.value;
      console.log('level');
      s.SwimmingLevels = 1;
      console.log('debt');
      s.Debt = 720;
      s.Discount = true;
      console.log('kjkjkj');
      s.Remarks = this.myForm.controls.Remarks.value;
      this.studentService.createStudent(s).subscribe(ans => {
        console.log('addStudentFunction');

        this.myForm.reset();
      });
    }

  }
  // onChange(event) {
  //   if (event == 1) {
  //     this.levelh = 0;
  //   }
  //   if (event == 2) {
  //     this.levelh = 1;
  //   }
  //   if (event == 3) {
  //     this.levelh = 2;
  //   }
  // }
}
