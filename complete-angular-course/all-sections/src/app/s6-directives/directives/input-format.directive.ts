import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[s6InputFormat]'
})
export class InputFormatDirective {

  // @Input('format') format;

  @Input('s6InputFormat') format;

  constructor(private el: ElementRef) { }

  // @HostListener('focus')
  // onFocus(){
  //   console.log('onFocus');
  // }

  @HostListener('blur')
  onBlur(){
    let value: string = this.el.nativeElement.value;
    if (this.format=='lowercase') {
      this.el.nativeElement.value = value.toLowerCase();      
    } else {
      this.el.nativeElement.value = value.toUpperCase();  
    }

    // console.log('onBlur');

  }

}
