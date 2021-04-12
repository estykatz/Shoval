import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { identityValidator } from 'src/app/validators/Identity.validator';

import { Registratio } from 'src/app/models/registratio';
import { StudentsService } from 'src/app/services/students.service';
import { HelpService } from 'src/app/services/help.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Levels } from 'src/app/models/levels';
import { ActivatedRoute, Router } from '@angular/router';


import { Courses } from 'src/app/models/coures';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  levelsAndPrice: Array<Levels>;
  a: any;
  dataR: any;
  student: any;
  studentLevel: string;
  orderBy: string = "FirstName";
  //activeRoute:any;
  // @Output() myEvent = new EventEmitter<Registratio>();
  constructor(private studentService: StudentsService, private helpService: HelpService, private router: Router, private activeRoute: ActivatedRoute) { }



  ngOnInit(): void {
    this.getLevelandPrice();
    this.student = this.helpService.getData();
    console.log('fangerיחטעחטע');
    console.log(this.student);
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
      boyorgirl: new FormControl(''),
      Remarks: new FormControl(''),
      age: new FormControl('', Validators.required)
    });
    // console.log('nisayon');
    // console.log(this.registionOredit);

    // console.log('hjhjhj');
    // console.log(this.student);
    // console.log('eerrors');
    // console.log(this.myForm.errors?.SandB);



    // console.log('studentinregistion');
    // console.log(this.student);
    this.registionOrEdit();
  }
  registionOrEdit() {
    this.activeRoute.params.subscribe(x => {
      console.log('x');
      console.log(x);
      this.dataR = x.data;
      console.log('dataחללחחל');
      console.log(this.dataR);
      if (this.dataR === true) {
        console.log('dataRRRRRRRRRRRRRRRRRRRRRRRR');
        console.log(this.dataR);

        this.helpService.setData(undefined);
      }
      if (this.dataR == "false") {
        this.myForm.controls.firstname.setValue(this.student.FirstName);
        this.myForm.controls.lastName.setValue(this.student.Lastname);
        this.myForm.controls.phone.setValue(this.student.PhoneNumber);
        this.myForm.controls.level.setValue(this.student.Level);
        this.myForm.controls.PlaceOfStudy.setValue(this.student.PlaceOfStudy);
        this.myForm.controls.Remarks.setValue(this.student.Remarks);
        if (this.student.studentId) {
          console.log('jhjhjhj');
          this.myForm.controls.hmo.setValue(1);
        }
      }
      if (this.helpService.getData() != undefined) {
        console.log('aaaaaaa');
      }
      //  console.log('studentinregistion');
      //  console.log(this.student);
    })
  }
  //   this.getLevelandPrice();
  // }
  onChange(value) {
    console.log(value);
    this.studentLevel = value;
  }
  getLevelandPrice() {
    this.studentService.getLevel().subscribe(ans => {
      console.log(ans);
      this.levelsAndPrice = ans;
      console.log('levelsandpriceeeeeeeeeeeeee');

      console.log(this.levelsAndPrice);

    })
  }
  editstudent(hmo, boy, girl) {
    console.log('hmo');

    console.log(hmo);
    const s = new Registratio();
    s.FirstName = this.myForm.controls.firstname.value;
    s.Lastname = this.myForm.controls.lastName.value;
    s.PhoneNumber = this.myForm.controls.phone.value;
    s.studentId = this.myForm.controls.identity.value;
    s.PlaceOfStudy = this.myForm.controls.PlaceOfStudy.value;
    if (hmo) { s.Discount = true; }
    else {
      s.Discount = false;
      s.studentId = null;
    }
    if (boy) { s.BoyOrGirl = 0; }
    if (girl) { s.BoyOrGirl = 1; }
    s.SwimmingLevels = this.myForm.controls.level.value;
    s.Debt = 720;
    s.age = 12;
    s.Remarks = this.myForm.controls.Remarks.value;
    this.studentService.editStudent(this.student, s).subscribe(a => {
      console.log('aaaaaa');

      console.log(a);
      this.router.navigate(['/allStudents']);
      this.helpService.getAllStudents(this.orderBy);
      this.myForm.reset();
    })
  }
  //, payments!>
  addNewStudent(hmo, boy, girl) {

    //   })
    // }
    // addNewStudent(hmo) {

    if (this.myForm.invalid) {
      //  this.myEvent.emit({
      const s = new Registratio();
      s.FirstName = this.myForm.controls.firstname.value;
      s.Lastname = this.myForm.controls.lastName.value;
      s.PhoneNumber = this.myForm.controls.phone.value;
      s.studentId = this.myForm.controls.identity.value;
      s.PlaceOfStudy = this.myForm.controls.PlaceOfStudy.value;
      //   = this.myForm.controls.level.value;
      console.log('fgfdkgjgegjog');

      console.log(this.levelsAndPrice);
      console.log(this.myForm.controls.level.value);

      this.a = this.levelsAndPrice.find(level => level.Level = this.myForm.controls.level.value);
      console.log(this.a);

      //console.log(this.a.levelId);
      // s.SwimmingLevels = this.a.levelId;
      s.SwimmingLevels = this.studentLevel;
      console.log('levellllllllllll');
      console.log(s.SwimmingLevels);

      s.Debt = 720;
      if (hmo) { s.Discount = true; }
      else { s.Discount = false; }
      if (boy) { s.BoyOrGirl = 0; }
      if (girl) { s.BoyOrGirl = 1; }
      // s.SwimmingLevels = this.myForm.controls.level.value;
      console.log('kjkjkj');
      s.Remarks = this.myForm.controls.Remarks.value;
      s.age = this.myForm.controls.age.value;
      this.studentService.createStudent(s).subscribe(ans => {
        this.myForm.reset();
        this.helpService.getAllStudents(this.orderBy);
      });

      console.log(s);

      this.helpService.setData(s);
      // if (payments) {
      this.router.navigate(['/payment']);
      // }
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


  // PhoneNumber() {
  //   const s = new Registratio();
  //   s.PhoneNumber = this.myForm.controls.phone.value;
  //   this.studentService.getPhone(s).subscribe(ans => {
  //     console.log(ans);
  //     this.phoneArray = ans;
  //   })
  // }
  // onChangeDay(day: string) {
  //   this.dayofweek = day;
  // }

}
