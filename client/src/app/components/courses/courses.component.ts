import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Levels } from 'src/app/models/levels';
import { CourseService } from 'src/app/services/course.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  myForm: FormGroup;
  level: string;
  constructor(private coursesService: CourseService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      level: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    })
  }
  addNewCourse() {
    if (this.myForm.valid) {
      const c = new Levels();
      c.price = this.myForm.controls.price.value;
      c.Level = this.myForm.controls.level.value;
      this.coursesService.createCourse(c).subscribe(ans => {

        this.myForm.reset();
      });
    }
  }
  selectOption(option) {
    this.level = option;
  }
}
