import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LoadingScreenService } from '../../loading-screen/loading-screen.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenInterceptor implements HttpInterceptor {
  activeRequests: number = 0;

  constructor(private loadingScreenService: LoadingScreenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      console.log("asd");
      this.loadingScreenService.startLoading();
    }

    this.activeRequests++;
    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingScreenService.stopLoading();
        }
      })
    );
  }

}
