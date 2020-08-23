import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000/user';

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.url, user);
  }

  getUser(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
