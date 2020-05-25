import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[AltPercent]'
})
export class AltPercentDirective {
  @Input('decimals') decimals: number = 0;
  @Input('digit') digit: number = 1;

  private check(value: string, decimals: number, digit: number) {
    if (decimals <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    } else {
      var regExpString = "^\\s*((\\d[0-9]{0," + digit + "}(\\.\\d{0," + decimals + "})?)|((\\d[0-9]{0," + digit + "}(\\.\\d{1," + decimals + "}))))\\s*$"
      return String(value).match(new RegExp(regExpString));
    }
  }

  private specialKeys = [
    'Control','Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
  ];

  private auxKeys = [ 'a', 's', 'v'];

  constructor(private el: ElementRef, private model: NgModel) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log('ev out',this.specialKeys,event.key);
    console.log(event);
    if (this.specialKeys.indexOf(event.key) !== -1) {
      if (this.auxKeys.indexOf(event.key) !== -1) {
        console.log(this.specialKeys,event.key);
        console.log('ev in');
        return;       
      }
 
    }

    let current: string = this.el.nativeElement.value;
    let position: number = this.el.nativeElement.selectionStart;
    let next: string = [current.slice(0, position), event.key, current.slice(position)].join('');
    if (next && !this.check(next, this.decimals, this.digit)) {
      event.preventDefault();
      return next;
    }

  }

  @HostListener("blur")
  onBlur() {
    let next2: string = this.el.nativeElement.value;
    this.model.update.emit(parseFloat(next2));
    if (parseFloat(next2)>100.0) {
      next2 = "100.00";
    }
    this.el.nativeElement.value = next2 + '%';
  }

  @HostListener("focus")
  onFocus() {
    let next1: string = this.el.nativeElement.value;
    if (next1.indexOf('%') != -1) {
      this.el.nativeElement.value = next1.substring(0, next1.length - 1);
    }

  }

}