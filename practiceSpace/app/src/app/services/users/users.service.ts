import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Object>{
    return this.http.get(this.url);
  }
}
