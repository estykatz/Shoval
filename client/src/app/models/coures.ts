import { Time } from '@angular/common';

export class Courses {
  price: number;
  DateStart: Date;
  DateFinish: Date;
  Day: Date;
  Hour: Time;
  Level: string;


  constructor(price?: number, start?: Date, finish?: Date, day?: Date, hour?: Time, level?: string) {

    this.price = price;
    this.DateStart = start;
    this.DateFinish = finish;
    this.Day = day;
    this.Hour = hour;
    this.Hour = hour;
    this.Level = level;
  }
}
