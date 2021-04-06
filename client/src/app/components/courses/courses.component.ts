import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Courses } from 'src/app/models/coures';
import { CourseService } from 'src/app/services/course.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  myForm: FormGroup;
  level:string;
  constructor(private coursesService: CourseService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      day: new FormControl('', Validators.required),
      hour: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    })
  }
  addNewCourse() {
    if (this.myForm.valid) {
      const c = new Courses();
      c.DateStart = this.myForm.controls.startDate.value;
      c.DateFinish = this.myForm.controls.endDate.value;
      c.price = this.myForm.controls.price.value;
      c.Level =this.level;
      this.coursesService.createCourse(c).subscribe(ans => {

        this.myForm.reset();
      });
    }
  }
  selectOption(option){
   this.level= option;
  }
}
