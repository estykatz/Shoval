import { Time } from '@angular/common';

export class Courses {
  price: number;
  DateStart: Date;
  DateFinish: Date;
  Level: string;


  constructor(price?: number, start?: Date, finish?: Date,level?: string) {

    this.price = price;
    this.DateStart = start;
    this.DateFinish = finish;
    this.Level = level;
  }
}
