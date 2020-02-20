import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable, PartialObserver } from 'rxjs';
import { delay } from 'rxjs/operators';

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

  retrieve():Observable<Object>{
    // return new Observable(observer=>{
    //   var users;
    //   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(resp=>users = resp);
    //   setTimeout(()=>observer.next(users), 3000);
    // });

    // var temp;
    // setTimeout(()=>{
    //   temp = this.http.get('https://jsonplaceholder.typicode.com/users');
    // },3000)
    // return temp;

    // return this.http.get('https://jsonplaceholder.typicode.com/users');

    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(delay(5000));
  }
}
