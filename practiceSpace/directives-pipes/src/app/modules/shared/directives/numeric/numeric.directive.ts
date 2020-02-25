import { Directive, HostListener, Input, ElementRef, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
/**
 * https://gist.github.com/ahmeti/5ca97ec41f6a48ef699ee6606560d1f7
 */
@Directive({
  selector: '[myNumeric]'
})
export class NumericDirective implements OnInit {

  @Input('decimals') decimals: number = 0;

  ngOnInit(): void {
    this.ngm.update.emit(this.ngm.model);
  }

  private check(value: string, decimals: number)
  {
    if (decimals <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    } else {
        var regExpString = "^\\s*((\\d+(\\.\\d{0," + decimals + "})?)|((\\d*(\\.\\d{1," + decimals + "}))))\\s*$"
        return String(value).match(new RegExp(regExpString));
    }
  }

  private specialKeys = [ 
    'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
  ];

  constructor(
    private el: ElementRef,
    private ngm: NgModel) {
  }

  @HostListener('keydown', [ '$event' ])
  onKeyDown(event: KeyboardEvent) {  
    if (this.specialKeys.indexOf(event.key) !== -1) {
          return;
      }
      // Do not use event.keycode this is deprecated.
      // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
      let current: string = this.ngm.model;
      let next: string = current.concat(event.key);
      if ( next && !this.check(next, this.decimals) ) {
         event.preventDefault();
      }
  }
}
