import { Directive, ElementRef, OnInit, HostBinding, HostListener, OnChanges, DoCheck } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgControl, NgModel } from '@angular/forms';

@Directive({
  selector: '[myPercent]'
})
export class PercentDirective implements OnInit, DoCheck {
  ngDoCheck(): void {
    var commaRemoved = parseFloat(this.ngm.model.replace(",",""));
    this.ngm.update.emit(this.decimalPipe.transform(commaRemoved,'1.2-2'));
  }

  constructor(
    private ngm: NgModel,
    private ngc: NgControl,
    private el: ElementRef,
    private decimalPipe: DecimalPipe
    ) { 
         
  }

  private specialKeys = [ 
    'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
  ];

  ngOnInit(): void {
    console.log(this.ngm.model);
    // console.log(this.decimalPipe.transform(this.ngm.model,'1.2-2'));
    
  }



  @HostListener("keyup", ["$event"])
  onKeyUp(event:KeyboardEvent){
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
      console.log(this.ngm.model);
      var value = this.ngm.model; 
      var commaRemoved = parseFloat(value.replace(",",""));
      var commaRemoved1 = value.replace(/,/gm, ""); 
      // var va = this.decimalPipe.transform(commaRemoved1,'1.2-2');
      // console.log(va);
      // this.el.nativeElement.value = va;
      this.ngm.update.emit(commaRemoved1);  

    //
  }

}

/**
*
*
// Listening to the value of ngModel 
that.ngModel.valueChanges.subscribe(function (value) {
  // Set any value of your custom control
  $(that.element.nativeElement).data("newValue",value);
});

// Inform ng model for any new change happened
$(that.element.nativeElement).bind("customEvent",function (someNewValue) {
      that.ngModel.update.emit(someNewValue);
  }
});
*
*
*/