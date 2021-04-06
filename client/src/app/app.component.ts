import { Component } from '@angular/core';
//import { UserService } from './services/user.service';
import { SharedService } from './services/shared.service';
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
  regist = false;
  course = false;
  enter = false;
  seeStudent=false;
  name: string;
  //private userService: UserService,
   constructor( private sharedService: SharedService) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {

    // this.userService.getUser()
    //   .subscribe((user) => {
    //     // tslint:disable-next-line: no-debugger

    //   });
    this.sharedService.shareName.subscribe(name => this.name = name);
  }
  startre() {
    this.regist = true;
  }
  startc() {
    this.course = true;
  }
  startenter() {
    this.enter = true;
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
  seeAllStudents(){
    this.seeStudent=true;
  }
}
