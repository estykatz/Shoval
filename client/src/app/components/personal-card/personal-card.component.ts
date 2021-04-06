import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalCard } from 'src/app/models/personal-card';
import { HelpService } from 'src/app/services/help.service';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent implements OnInit {
  myForm: FormGroup;
  detail;
  constructor(private helpService: HelpService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[א-ת]{1}[א-ת ]*')])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[א-ת]{1}[א-ת ]*')])),
      phone: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
    console.log('personal card components');

    this.detail = this.helpService.allDetails;
    console.log('in personalcard');
    console.log(this.detail);

  }

}
