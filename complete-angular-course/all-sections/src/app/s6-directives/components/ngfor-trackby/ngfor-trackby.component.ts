import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's6-ngfor-trackby',
  templateUrl: './ngfor-trackby.component.html',
  styleUrls: ['./ngfor-trackby.component.css']
})
export class NgforTrackbyComponent implements OnInit {
  courses;

  constructor() { }

  ngOnInit(): void {
  }

  loadCourses(){
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ];
  
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }

}
