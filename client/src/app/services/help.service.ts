import { Injectable } from '@angular/core';
import { AllStudentsService } from './all-students.service';
import { Registratio } from '../models/registratio';
import { NewUsers } from '../models/new-users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PersonalCard } from '../models/personal-card';
import { UserService } from './user.service';
import { TokenStorageService } from "./token-storage.service";
import { AllUsersComponent } from '../components/all-users/all-users.component';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  students: Array<Registratio>;
  allUsers: Array<NewUsers>;
  isAdmin: any;
  private detail;
  isLoggedIn: any;
  private data: any = undefined;
  url = 'http://localhost:4000';
  constructor(private http: HttpClient, private allStudentsService: AllStudentsService, private userService: UserService, private tokenStorageService: TokenStorageService) { }
  getAllStudents() {
    this.allStudentsService.getAllStudents().subscribe(ans => this.students = ans);
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe(ans => this.allUsers = ans)
  }
  setData(data: Registratio) {
    this.data = data;
  }
  getData(): Registratio {
    return this.data;
  }
  getRoleLogedIn() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log('in get role');

    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log(user);
      this.isAdmin = user.admin;
      console.log(this.isAdmin);
      return this.isAdmin;
    }
    return false;
  }
  getDetails(student: Registratio): Observable<any> {
    console.log(student);
    return this.http.post<any>(`${this.url}/help/getdetails`, student);
  }
  setDetails(details) {
    console.log('in set details');

    console.log(details);
    this.detail = details;
  }
  get allDetails():any {
    return this.detail[0];
  }
}
