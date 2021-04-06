import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Course} from '../models/Course';
@Injectable({
  providedIn: 'root'
})
export class SplitingToGroupsService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';

  splitingToGroups():Observable<any>{
    return this.http.get<any>(`${this.url}/splitingToGroups/groups`)
  }


}


