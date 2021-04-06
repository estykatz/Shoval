import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { identityValidator } from 'src/app/validators/Identity.validator';
import { Registratio } from 'src/app/models/registratio';
import { StudentsService } from 'src/app/services/students.service';
import { HelpService } from 'src/app/services/help.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Courses } from 'src/app/models/coures';
@Component({
  selector: 'app-registratio',
  templateUrl: './registratio.component.html',
  styleUrls: ['./registratio.component.css']
})
export class RegistratioComponent implements OnInit {

  myForm: FormGroup;
  levelh: number;
  dayofweek: string;
  phoneArray: Array<Registratio>;
  levelsAndPrice: Array<Courses>;
  @Output() myEvent = new EventEmitter<Registratio>();
  constructor(private studentService: StudentsService, private helpService: HelpService) { }

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
    this.getLevelandPrice();
  }
  getLevelandPrice() {
    this.studentService.getLevel().subscribe(ans => {
      console.log(ans);
      this.levelsAndPrice = ans;
    })
  }
  addNewStudent(hmo) {
    if (this.myForm.invalid) {
      //  this.myEvent.emit({
      const s = new Registratio();
      s.FirstName = this.myForm.controls.firstname.value;
      s.Lastname = this.myForm.controls.lastName.value;
      s.PhoneNumber = this.myForm.controls.phone.value;
      s.studentId = this.myForm.controls.identity.value;
      s.PlaceOfStudy = this.myForm.controls.PlaceOfStudy.value;
      s.SwimmingLevels =this.myForm.controls.level.value ;
      s.Debt = 720;
      if (hmo) { s.Discount = true; }
      else { s.Discount = false; }
      console.log('kjkjkj');
      s.Remarks = this.myForm.controls.Remarks.value;
      this.studentService.createStudent(s).subscribe(ans => {
        this.myForm.reset();
        this.helpService.getAllStudents();
      });
    }
  }
  PhoneNumber() {
    const s = new Registratio();
    s.PhoneNumber = this.myForm.controls.phone.value;
    this.studentService.getPhone(s).subscribe(ans => {
      console.log(ans);
      this.phoneArray = ans;
    })
  }
  onChangeDay(day: string) {
    this.dayofweek = day;
  }
}
