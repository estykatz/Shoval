export class Payment {
  identity: string;
  PriceToStudent: number;
  Sum: number;
  WayofPayment: number;
<<<<<<< HEAD
  PaymentTransfer: number; // למה התכוונו התרגום זה העברה תשלום
=======
  PaymentTransfer: boolean;//למה התכוונו התרגום זה העברה תשלום
>>>>>>> 2b202c5e257a61fb01f875675a946732dc49113b
  Date: Date;


  constructor(id?: string, price?: number, sum?: number, way?: number, pay?: boolean, date?: Date) {
    this.identity = id;
    this.PriceToStudent = price;
    this.Sum = sum;
    this.WayofPayment = way;
    this.PaymentTransfer = pay;
    this.Date = date;
  }

}

