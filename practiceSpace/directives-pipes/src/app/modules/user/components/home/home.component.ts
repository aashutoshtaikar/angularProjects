import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() sampleModel: string = "10000.2222";
  @Input() color: string;
  constructor() { }

  ngOnInit() {
    console.log("asdasd");
  }

}
