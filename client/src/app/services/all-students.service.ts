import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registratio } from 'src/app/models/registratio';
@Injectable({
  providedIn: 'root'
})
export class AllStudentsService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000/getAllStudents';
  getAllStudents(): Observable<Registratio[]> {
    return this.http.get<Registratio[]>(`${this.url}/table`);
  }
  deleteStudent(student: Registratio): Observable<any> {
    return this.http.post<any>(`${this.url}/delete`, student)
  }
}