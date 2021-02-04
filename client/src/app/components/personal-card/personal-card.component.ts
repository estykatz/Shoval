import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent implements OnInit {
  myForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
