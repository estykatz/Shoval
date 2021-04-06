export class PersonalCard {
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Debt: number;
  Discount: number;

  constructor(fn?: string, ln?: string, phone?: string, debt?: number, discount?: number) {
    this.FirstName = fn;
    this.LastName = ln;
    this.PhoneNumber = phone;
    this.Debt = debt;
    this.Discount = discount;
  }
}
