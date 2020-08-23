import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shoval';
  visible = false;
  visibleattendance=false;
   start() {
  this.visible = true;
  }
  starta() {
    this.visibleattendance = true;
    }
}
