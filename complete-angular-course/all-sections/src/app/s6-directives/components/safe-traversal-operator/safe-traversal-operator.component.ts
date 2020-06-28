import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's6-safe-traversal-operator',
  templateUrl: './safe-traversal-operator.component.html',
  styleUrls: ['./safe-traversal-operator.component.css']
})
export class SafeTraversalOperatorComponent implements OnInit {
  task = {
    title: 'Review Application',
    assignee: null
  }
  constructor() { }

  ngOnInit(): void {
  }

}
