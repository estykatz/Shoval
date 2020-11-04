import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private name = new BehaviorSubject('');
  shareName = this.name.asObservable();
  constructor() { }

  nextName(name: string) {
    this.name.next(name);
  }
}
