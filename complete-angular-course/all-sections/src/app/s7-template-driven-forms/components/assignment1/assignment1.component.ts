import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's7-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  categories = [
    {id: 1, name: 'development'},
    {id: 2, name: 'art'},
    {id: 3, name: 'languages'},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

  submit(assignmentForm){
    console.log(assignmentForm);
  }
  
  onChange(assignmentForm){
    console.log(assignmentForm);
  }
}
