import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registratio } from '../models/registratio';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000/addStudent';


  addStudent(student: Registratio): Observable<any> {
    return this.http.post<Registratio>(this.url, student);
  }
  getStudent(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
