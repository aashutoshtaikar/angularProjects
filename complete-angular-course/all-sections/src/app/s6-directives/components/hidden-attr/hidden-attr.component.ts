import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's6-hidden-attr',
  templateUrl: './hidden-attr.component.html',
  styleUrls: ['./hidden-attr.component.css']
})
export class HiddenAttrComponent implements OnInit {
  courses = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
