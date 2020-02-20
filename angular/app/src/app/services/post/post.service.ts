import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

interface Posts{

}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    //response type
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts',{responseType:'json'});
    // return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts',{responseType:'text'});
  }

  getPostsFull(): Observable<HttpResponse<Post[]>>{
    //getting full response not only body
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts',{observe:'response'});
  }

  getPostsFullDemo(): Observable<Post[]>{  
    //getting full response not only body
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts',{observe:'response'})
    .pipe(
      tap(response=>console.log(response)),
      map(response=>response.body)
    );
  }

  getPostsFailDemo(): Observable<Post[]>{  
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/postsasdasd')
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getPostsFailGlobalErrorHandlingDemo(): Observable<Post[]>{  
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/postsasdasd');
  }

  //request header
  getPostsHeaderDemo(): Observable<Post[]>{  
    const headers = new HttpHeaders({
      'Name': 'Davidacosta'
    });

    //params and headers should be immutable
    // const params = new HttpParams().append('age','100');

    // use this to append more params
    let params = new HttpParams().append('age','100');
    params = params.append('something','5');
    
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/postsasdasd', {headers:headers, params:params})
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse){
    console.log(error);
    return throwError(error);
  }
}
