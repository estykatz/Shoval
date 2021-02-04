import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Email} from '../models/email';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
  url='http://localhost:4000/addemail';
  addEmail(email: Email): Observable<any> {
    console.log(email);
    return this.http.post<any>(`${this.url}/add`,email);
  }
}
