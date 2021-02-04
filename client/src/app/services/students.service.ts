import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registratio } from '../models/registratio';
import {Courses} from '../models/coures';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000/student';


  createStudent(student: Registratio): Observable<any> {
    return this.http.post<Registratio>(`${this.url}/addstudent`, student);
  }
  getPhone(student: Registratio): Observable<any> {
    return this.http.post<Registratio>(`${this.url}/getphone`, student);
  }
getLevel():Observable<Courses[]>{
  return this.http.get<Courses[]>(`${this.url}/getlevel`);
}
}
