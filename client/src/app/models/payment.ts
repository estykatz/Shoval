export class Payment {
  identity: string;
  PriceToStudent: number;
  Sum: number;
  WayofPayment: number;
  PaymentTransfer: number; // למה התכוונו התרגום זה העברה תשלום
  Date: Date;


  constructor(id?: string, price?: number, sum?: number, way?: number, pay?: number, date?: Date) {
    this.identity = id;
    this.PriceToStudent = price;
    this.Sum = sum;
    this.WayofPayment = way;
    this.PaymentTransfer = pay;
    this.Date = date;
  }

}

