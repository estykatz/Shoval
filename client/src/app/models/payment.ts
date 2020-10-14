export class Payment {
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  PriceToStudent: number;
  Sum: number;
  WayofPayment: number;

  // PaymentTransfer: number;  //  למה התכוונו התרגום זה העברה תשלום

  PaymentTransfer: boolean; // למה התכוונו התרגום זה העברה תשלום

  date: Date;


  constructor(fn?: string, ln?: string, phone?: string, price?: number, sum?: number, way?: number, pay?: boolean, date?: Date) {
    this.FirstName = fn;
    this.LastName = ln;
    this.PhoneNumber = phone;
    this.PriceToStudent = price;
    this.Sum = sum;
    this.WayofPayment = way;
    this.PaymentTransfer = pay;
    this.date = date;
  }

}

