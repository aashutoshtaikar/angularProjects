import { Component, OnInit, OnDestroy, ChangeDetectorRef, ElementRef, AfterViewInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingScreenService } from 'src/app/services/loading-screen/loading-screen.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit{
  ngOnInit(): void {
    console.log("spinner init");
    // this.loadingScreenService.loadingStatus
    //   .subscribe(() => {
    //   console.log("does it ever gets here?" + this.loading);
    //   // this.loading = value;
    // });
  }

  ngDoCheck(){
    this.loading = this.loadingScreenService.loading;
    console.log(this.loading);
  }

  // debounceTime: number = 200;
  loading: boolean;
  // loadingSubscription: Subscription;

  constructor(
    private loadingScreenService: LoadingScreenService,
    private _elmRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) { 

  }

  // ngOnDestroy() {
  //   this.loadingSubscription.unsubscribe();
  // }

  // ngAfterViewInit(): void {
  //   this._elmRef.nativeElement.style.display = 'none';
  //   this.loadingScreenService.loadingStatus.subscribe(
  //     (status: boolean) => {
  //       console.log("subsciption success");
  //       this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
  //       this._changeDetectorRef.detectChanges();
  //     }
  //   );}
  // }
}
