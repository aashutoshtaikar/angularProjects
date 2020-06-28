import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's6-ngfor-changedetection',
  templateUrl: './ngfor-changedetection.component.html',
  styleUrls: ['./ngfor-changedetection.component.css']
})
export class NgforChangedetectionComponent implements OnInit {

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    let maxId = Math.max(...this.courses.map(c=>c.id));
    this.courses.push({id: maxId+1, name: `course${maxId+1}`});
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  onEdit(course){
    course.name = 'updated';
  }
}
