import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../users/users.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentStateService {
  public allUsers: User[] = new Array<User>(); 
  public loaded: Subject<Array<User>> = new Subject();

  constructor(private usersService: UsersService) { 
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe(response=>{
      this.allUsers = <Array<User>>response;
      this.loaded.next(this.allUsers);
    });
  }

}
