import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Email} from '../models/email';
import { NewUsers } from '../models/new-users';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
  url='http://localhost:4000/addemail';
  addEmail(email: NewUsers): Observable<any> {
    console.log(email);
    return this.http.post<any>(`${this.url}/add`,email);
  }
}
