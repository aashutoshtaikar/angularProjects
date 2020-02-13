import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userMap: Map<number, Object> = new Map();
  public users: Array<User> = new Array();

  constructor(private http: HttpClient) {
    this.retrieve()
      .subscribe(response=>{

          Object.keys(response).forEach((k,v)=>{
            console.log(k);
            this.userMap.set(response[k]['id'],response[k]);
            // var obj:User = response[k];
            this.users.push(<User>response[k]);
          });
            console.log(this.users);
            console.log(this.userMap.get(2));
            console.log(this.userMap);
      });

      
  }

  retrieve(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
