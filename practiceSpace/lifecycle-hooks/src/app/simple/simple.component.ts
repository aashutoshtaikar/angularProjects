import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {


  @Input() simpleInput: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(propertyName + " current value:" + current + " previous value:" + previous); 
    }
  }
  
  ngDoCheck(): void {
    console.log("in do check");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }


}
