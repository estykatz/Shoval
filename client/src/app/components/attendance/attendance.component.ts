import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  constructor() { }

  ngOnInit(): void {

  }

}
