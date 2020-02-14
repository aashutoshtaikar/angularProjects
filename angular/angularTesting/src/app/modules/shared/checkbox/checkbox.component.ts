import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() tickInput: boolean;
  @Input() tickActive: boolean;
  @Input() crossActive: boolean;

  constructor() { }

  ngOnInit() {
    if (this.tickInput) {
      this.onYesClick();
    }else{
      this.onNoClick();
    }
  }

  onYesClick(){
    this.tickActive = !this.tickActive;
    this.crossActive = false;
  }

  onNoClick(){
    this.crossActive = !this.crossActive;
    this.tickActive = false;
  }
}
