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
  getAllStudents(orderBy: string): Observable<Registratio[]> {
    console.log('in servuce all');
    console.log(orderBy);
    return this.http.post<Registratio[]>(`${this.url}/table`, orderBy);
  }
  deleteStudent(student: Registratio): Observable<any> {
    return this.http.post<any>(`${this.url}/delete`, student)
  }
}
