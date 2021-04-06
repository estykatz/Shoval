import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { NewUsers } from '../models/new-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  createUser(user: NewUsers): Observable<any> {
    console.log('bvbvbv');
    return this.http.post<any>(`${this.url}/user/adduser`, user);
  }
  checkuser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.url}/user/login`, user);
  }
  getUser(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.url}/user/getallUsers`);
  }
  deleteUser(user: NewUsers): Observable<any> {
    return this.http.post<any>(`${this.url}/user/deleteuser`, user)
  }
}
