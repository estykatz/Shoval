import { Component, OnInit } from '@angular/core';
import { NewUsers } from 'src/app/models/new-users';
import { UserService } from 'src/app/services/user.service';
import { HelpService } from "src/app/services/help.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allUsers: Array<NewUsers>;
  constructor(private userService: UserService, private helpService: HelpService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe(ans => {
      this.allUsers = ans;
      console.log(this.allUsers);
    })
  }
  redirectTonewUser(user) {
    this.router.navigate(['/email', false]);
  }
  deleteUser(user) {
    console.log(user);
    this.userService.deleteUser(user).subscribe(ans => {
      console.log(ans);
      this.helpService.getAllUsers();
    })
  }
}
