import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from '../models/newUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  createUser(user: NewUser): Observable<any> {
    return this.http.post<NewUser>(`${this.url}/add`, user);
  }
  checkuser(user: NewUser): Observable<any> {
    let name = user.userName;
    return this.http.get<any>(`${this.url}/checkuser/${name}`);
  }
  getUser(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
