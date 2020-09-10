import { Time } from "@angular/common";

export class Coures {
  price: number;
  DateStart: Date;
  DateFinish: Date;
  Day: Date;
  Hour: Time;


  constructor(price?: number, start?: Date, finish?: Date, day?: Date,hour?:Time) {
    this.price = price;
    this.DateStart = start;
    this.DateFinish = finish;
    this.Day = day;
    this.Hour=hour;
  }
}
