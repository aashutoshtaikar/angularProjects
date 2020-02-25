import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string;
  @Input() highlightColor: string;

  constructor(private el: ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter(){
   this.highlight(this.highlightColor || this.defaultColor || 'orange'); 
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
