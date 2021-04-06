import { Time } from '@angular/common';

export class Levels {
  levelId: number;
  price: number;
  Level: string;


  constructor(levelId?: number, price?: number, Level?: string) {
    this.levelId = levelId;
    this.price = price;
    this.Level = Level;

  }
}
