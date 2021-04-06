import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Email} from '../models/email';
<<<<<<< HEAD
import { NewUsers } from '../models/new-users';
=======
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
  url='http://localhost:4000/addemail';
<<<<<<< HEAD
  addEmail(email: NewUsers): Observable<any> {
=======
  addEmail(email: Email): Observable<any> {
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
    console.log(email);
    return this.http.post<any>(`${this.url}/add`,email);
  }
}
