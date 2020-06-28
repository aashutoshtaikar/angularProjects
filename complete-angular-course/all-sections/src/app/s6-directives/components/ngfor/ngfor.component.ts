import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's6-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
