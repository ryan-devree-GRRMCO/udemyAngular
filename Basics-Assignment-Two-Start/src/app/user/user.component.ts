import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allowNewUser = false;
  userCreationStatus = 'No user was created!';
  userName = '';

  constructor() {
   }

  ngOnInit() {
  }

  onCreateUser() {
    this.userCreationStatus = 'User was created! Name is ' + this.userName;
    this.userName = '';
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
