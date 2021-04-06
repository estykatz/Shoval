import { Component, OnInit } from '@angular/core';
import { Registratio } from 'src/app/models/registratio';
import { AllStudentsService } from 'src/app/services/all-students.service';
import { HelpService } from 'src/app/services/help.service';
import { PersonalCard } from 'src/app/models/personal-card';
import { SplitingToGroupsService } from 'src/app/services/spliting-to-groups.service';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  @Output() redirect: EventEmitter<any> = new EventEmitter();
  students: Array<any>;
  details: PersonalCard;
  end = false;
  constructor(private allStudentsService: AllStudentsService, private helpService: HelpService, private splitingToGroupsService: SplitingToGroupsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents() {
    this.allStudentsService.getAllStudents().subscribe(ans => {
      this.students = ans
      console.log(this.students);

    });
  }
  deleteStudent(fn, ln, phone) {
    let r = new Registratio();
    r.FirstName = fn;
    r.Lastname = ln;
    r.PhoneNumber = phone;

    this.allStudentsService
  }
  getDetails(fn, ln, phone) {
    let r = new Registratio();
    r.FirstName = fn;
    r.Lastname = ln;
    r.PhoneNumber = phone;
    console.log(r.PhoneNumber);

    this.helpService.getDetails(r).subscribe(ans => {
      this.details = ans;
      this.helpService.setDetails(ans);
      this.end = true;
    })
    if (this.end) {
      this.router.navigate(['/personalCard']);
    }

  }
  redirectToRegistion(student) {
    console.log('this is a student from allstudent');

    console.log(student);
    //  this.redirect.emit(student);
    this.helpService.setData(student);
    this.router.navigate(['/registratio', false])
  }
  splitingToGroups() {
    this.splitingToGroupsService.splitingToGroups().subscribe(ans => {
      console.log(ans);

    })
  }
}
