import { Time } from '@angular/common';

export class Coures {
  price: number;
  DateStart: Date;
  DateFinish: Date;
  Day: Date;
  Hour: Time;


<<<<<<< HEAD
  constructor(price?: number, start?: Date, finish?: Date, day?: Date, hour?: Time) {
=======
  constructor(price?: number, start?: Date, finish?: Date, day?: Date,hour?:Time) {
>>>>>>> 2b202c5e257a61fb01f875675a946732dc49113b
    this.price = price;
    this.DateStart = start;
    this.DateFinish = finish;
    this.Day = day;
<<<<<<< HEAD
    this.Hour = hour;
=======
    this.Hour=hour;
>>>>>>> 2b202c5e257a61fb01f875675a946732dc49113b
  }
}
