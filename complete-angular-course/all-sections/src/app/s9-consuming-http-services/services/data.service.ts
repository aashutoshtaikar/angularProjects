import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
        .pipe(
            map(response => response), //extract data from the response
            catchError(this.handleError)
        );
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .pipe(
        catchError(this.handleError)
      ); // patch only to modify certain properties of the object

    // this.http.put(this.url, JSON.stringify(post)); // to modify the entire object
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse){
    if (error.status===404) 
      return throwError(new NotFoundError(error));
    else if (error.status === 400)
      return throwError(new BadRequestError(error));
  
    return throwError(new AppError(error));
  }

}
