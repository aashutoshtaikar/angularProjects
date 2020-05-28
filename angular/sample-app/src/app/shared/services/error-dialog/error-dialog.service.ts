import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {
  validationError: Subject<any> = new Subject();
  constructor() { }

  openPopUpError(msg: string){
    
    this.validationError.next(msg);
  }
}
