import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's6-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  canSave = false;

  constructor() { }

  ngOnInit(): void {
  }

}
