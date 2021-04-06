import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Levels} from '../models/levels';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000/addcourse';
  createCourse(course: Levels): Observable<any> {
    return this.http.post<Levels>(this.url, course);
  }
  getCourse(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
