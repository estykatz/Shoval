import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AttendService {
url='http://localhost:8100 '
  constructor(private http:HttpClient) { }
  getFriends():Observable<friends[]>{
    return this.http.get<friends[]>(`${this.url}/list`)
  }
}
