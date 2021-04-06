import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000';
  createPayment(payment: Payment): Observable<any> {
    return this.http.post<Payment>(`${this.url}/add/addpayment`, payment);
  }
  SisterandBrother(payment: Payment): Observable<any> {
<<<<<<< HEAD
    return this.http.post<Payment>(`${this.url}/sisterandbrother/checked`, payment);
=======
    return this.http.post<Payment>(`${this.url}/sisterandbrother`, payment);
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
  }
  getPayment(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
console.log('after url');
