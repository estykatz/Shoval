import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shoval';
  visible = false;
  visibleattendance = false;
  visibleuser = false;
  constructor(private userService: UserService) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.userService.getUser()
      .subscribe((user) => {
        // tslint:disable-next-line: no-debugger
        debugger;
      });
  }


  startb() {
    this.visibleuser = true;
  }
  start() {
    this.visible = true;
  }
  starta() {
    this.visibleattendance = true;
  }
}
