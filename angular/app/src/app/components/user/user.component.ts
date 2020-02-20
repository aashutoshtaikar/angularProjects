import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.retrieve().subscribe((partialObserver:Observable<User[]>)=>{
    //   partialObserver.subscribe(resp=>console.log(resp));
    //   console.log("here");
    //   this.users = partialObserver
    // });
    this.userService.retrieve().subscribe(resp=>{
      console.log(resp);
      this.users = resp;
    })
  }

}
