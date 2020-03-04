import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  loading: boolean;
  loadingStatus: Subject<any> = new Subject();

  // get loading(){
  //   return this._loading;
  // }

  // set loading(value){
  //   this._loading = value;
  //   // this.loadingStatus.next(value);
  // }

  constructor(){
    this.loadingStatus.subscribe(()=>{
      console.log("in subscription loading screen service");
      this.loading = true;
    })
  }

  startLoading(){   
    this.loading = true;
    console.log("startloading: " + this.loading);
    this.loadingStatus.next(true);
  }

  stopLoading(){
    console.log("service stop loading");
    this.loading = false;
  }
}
