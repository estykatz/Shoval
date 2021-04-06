import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';


  // createStudent(student: Registratio): Observable<any> {
  //   console.log('in url');

  //   return this.http.post<>(this.url, student);
  //   console.log('after url st');

  // }
  getAttendance(): Observable<any> {
    return this.http.get<any>(`${this.url}/attend`);
  }
}
