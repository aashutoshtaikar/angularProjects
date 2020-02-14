import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/models/user.model';
import { CurrentStateService } from 'src/app/services/current-state/current-state.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public allUsers: User[] = new Array<User>(); 
  constructor(private currentStateService: CurrentStateService) { 
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers(){
    this.currentStateService.loaded.subscribe(allUsers=>{
      this.allUsers = allUsers;
      console.log(this.allUsers);
    });
  }
}
