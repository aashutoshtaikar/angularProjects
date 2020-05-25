import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s6-directives',
  templateUrl: './s6-directives.component.html',
  styleUrls: ['./s6-directives.component.css']
})
export class S6DirectivesComponent implements OnInit {
  courses = [1, 2];
  
  constructor() { }

  ngOnInit(): void {
  }

}
