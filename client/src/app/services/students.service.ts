import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registratio } from '../models/registratio';
<<<<<<< HEAD
import { Levels } from '../models/levels';
=======
import {Courses} from '../models/coures';
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000/student';


  createStudent(student: Registratio): Observable<any> {
    return this.http.post<Registratio>(`${this.url}/addstudent`, student);
<<<<<<< HEAD
  }
  getPhone(student: Registratio): Observable<any> {
    return this.http.post<Registratio>(`${this.url}/getphone`, student);
  }
  getLevel(): Observable<any>{
    return this.http.get<any>(`${this.url}/getlevel`);
=======
  }
  getPhone(student: Registratio): Observable<any> {
    return this.http.post<Registratio>(`${this.url}/getphone`, student);
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
  }
getLevel():Observable<Courses[]>{
  return this.http.get<Courses[]>(`${this.url}/getlevel`);
}
}
