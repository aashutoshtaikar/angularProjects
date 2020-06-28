import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's6-ngswitchcase',
  templateUrl: './ngswitchcase.component.html',
  styleUrls: ['./ngswitchcase.component.css']
})
export class NgswitchcaseComponent implements OnInit {

  viewMode = 'map'; //default tab

  constructor() { }

  ngOnInit(): void {
  }

}
