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
  dataR: boolean;
  // @Input()
  student: any;

  //activeRoute:any;
  // @Output() myEvent = new EventEmitter<Registratio>();
  constructor(private studentService: StudentsService, private helpService: HelpService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLevelandPrice();
    this.student = this.helpService.getData();
    console.log('fangerיחטעחטע');
    console.log(this.student);
    this.myForm = new FormGroup({
      firstname: new FormControl(this.student.FirstName, Validators.required),
      lastName: new FormControl(this.student.Lastname, Validators.required),
      phone: new FormControl(this.student.PhoneNumber, Validators.required),
      day: new FormControl('', Validators.required),
      hour: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      identity: new FormControl('', Validators.compose([Validators.required, identityValidator(),
      Validators.minLength(9), Validators.maxLength(9), Validators.pattern('^[0-9]{0,}$')])),
      PlaceOfStudy: new FormControl('', Validators.required),
      hmo: new FormControl(''),
      boyorgirl: new FormControl(''),
      Remarks: new FormControl('')
    });
    this.activeRoute.params.subscribe(x => {
      this.dataR = x.data;
      console.log('data');
      console.log(this.dataR);
      if (this.dataR = true) {
        this.helpService.setData(undefined);
      }
      if (this.helpService.getData() != undefined) {
        console.log('aaaaaaa');
      }
      //  console.log('studentinregistion');
      //  console.log(this.student);
    })

    console.log('hjhjhj');
    console.log(this.student);
    console.log('eerrors');
    console.log(this.myForm.errors?.SandB);



    console.log('studentinregistion');
    console.log(this.student);

  }

  getLevelandPrice() {
    this.studentService.getLevel().subscribe(ans => {
      console.log(ans);
      this.levelsAndPrice = ans;
      console.log(this.levelsAndPrice);

    })
  }
  addNewStudent(hmo, boy, girl, payments) {
    if (this.myForm.invalid) {
      //  this.myEvent.emit({
      const s = new Registratio();
      s.FirstName = this.myForm.controls.firstname.value;
      s.Lastname = this.myForm.controls.lastName.value;
      s.PhoneNumber = this.myForm.controls.phone.value;
      s.studentId = this.myForm.controls.identity.value;
      s.PlaceOfStudy = this.myForm.controls.PlaceOfStudy.value;
      //   = this.myForm.controls.level.value;
      console.log(this.levelsAndPrice);
      console.log(this.myForm.controls.level.value);

      this.a = this.levelsAndPrice.find(level => level.Level = this.myForm.controls.level.value);
      console.log(this.a);

      console.log(this.a.levelId);
      s.SwimmingLevels = this.a.levelId;
      s.Debt = 720;
      if (hmo) { s.Discount = true; }
      else { s.Discount = false; }
      if (boy) { s.BoyOrGirl = 0; }
      if (girl) { s.BoyOrGirl = 1; }
      s.Remarks = this.myForm.controls.Remarks.value;
      this.studentService.createStudent(s).subscribe(ans => {
        this.myForm.reset();
        this.helpService.getAllStudents();
      });
      console.log(s);

      this.helpService.setData(s);
      if (payments) {
        this.router.navigate(['/payment']);
      }
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
