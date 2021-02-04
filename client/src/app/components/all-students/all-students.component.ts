import { Component, OnInit } from '@angular/core';
import { Registratio } from 'src/app/models/registratio';
import { AllStudentsService } from 'src/app/services/all-students.service';
import { HelpService } from 'src/app/services/help.service';
import { PersonalCard } from 'src/app/models/personal-card';
@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  students: Array<Registratio>;
  details: PersonalCard;
  constructor(private allStudentsService: AllStudentsService, private helpService: HelpService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents() {
    this.allStudentsService.getAllStudents().subscribe(ans => this.students = ans);
  }
  getDetails(fn, ln, phone) {
    let r = new Registratio();
    r.FirstName = fn;
    r.Lastname = ln;
    r.PhoneNumber = phone;
    console.log(r.PhoneNumber);

    this.helpService.getDetails(r).subscribe(ans =>{
      this.details = ans;
      console.log(this.details);
    })
  }
}
