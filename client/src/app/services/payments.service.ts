import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000/addpayment';
  createPayment(payment: Payment): Observable<any> {
    return this.http.post<Payment>(this.url, payment);
  }
  getPayment(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
console.log('after url');





