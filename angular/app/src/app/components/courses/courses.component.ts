import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  courses;
  imageUrl = "https://www.gstatic.com/webp/gallery3/1.sm.png";
  colSpan = 2;
  isActive = true;

  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.25,
    releaseDate: new Date(2016, 3, 1)
  }

  //two way data binding
  someObject;
  typeHere;
  
  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }

  //EVENT BINDING
  onSave($event) {
    // $event.stopPropagation(); ////prevent event bubbling
    console.log(event);
    console.log(event.srcElement)
    console.log('button was clicked');
  }

  onDivClicked() {
    console.log('div was clicked');
  }

  onKeyUp($event) {
    console.log($event.keyCode + 'key was pressed');
    if ($event.keyCode === 13) console.log("Enter key pressed");
  }

  onEnterKeyUp() {
    console.log("Enter key pressed");
  }

  onKeyEvVar($event) {
    console.log($event.target.value);
  }

  onKeyVar(email) {
    console.log(email);
    console.log(email.value);
  }

  onKeyUpdateSomeObject() {
    console.log(this.someObject);
  }
}
