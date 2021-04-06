import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { User } from '../models/user';
import { NewUsers } from '../models/new-users';
=======
import { User } from '../models/User';
import { NewUsers } from '../models/newUsers';
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f

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
<<<<<<< HEAD
  checkuser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.url}/user/login`, user);
=======
  checkuser(user: User): Observable<boolean> {
    console.log(user);
    return this.http.post<boolean>(`${this.url}/user/login`,user);
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
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
