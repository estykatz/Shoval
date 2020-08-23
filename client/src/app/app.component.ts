import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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


  title = 'Shoval';
  visible = false;
  visibleattendance = false;
  start() {
    this.visible = true;
  }
  starta() {
    this.visibleattendance = true;
  }
}
