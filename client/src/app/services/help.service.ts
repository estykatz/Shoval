import { Injectable } from '@angular/core';
import { AllStudentsService } from './all-students.service';
import {Registratio} from '../models/registratio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {PersonalCard} from '../models/personal-card';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  students: Array<Registratio>;
  url = 'http://localhost:4000';
  constructor(private http:HttpClient, private allStudentsService:AllStudentsService) { }
  getAllStudents() {
    this.allStudentsService.getAllStudents().subscribe(ans =>this.students = ans);
  }
  getDetails(student:Registratio):Observable<any>{
    console.log(student);
    return this.http.post<any>(`${this.url}/help/getdetails`,student);
  }
}
