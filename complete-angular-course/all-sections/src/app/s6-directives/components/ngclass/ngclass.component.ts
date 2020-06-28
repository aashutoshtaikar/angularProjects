import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's6-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  isSelected: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isSelected = !this.isSelected;
  }

}
