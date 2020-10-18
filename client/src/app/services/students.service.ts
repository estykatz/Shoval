import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registratio } from '../models/registratio';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000/student';


  createStudent(student: Registratio): Observable<any> {
    console.log('in url');

    return this.http.post<Registratio>(this.url, student);
    console.log('after url st');

  }
  getStudent(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
