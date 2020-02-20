import { Component, OnInit } from '@angular/core';
import { FavoriteStatus } from '../favorite/favorite.component';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  typeHere = 1234;
  testSummary: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."; 
  
  constructor() { 
    console.log("in constructor");
  }

  ngOnInit() {
    console.log("in ngOnInit");
  }

  alertFunction($event){
    window.alert($event.target.value);
  }

  alertFunctionUsingTemplateVar(templateVar){
    window.alert(templateVar);
  }

  favoriteChanged(eventArgs: FavoriteStatus){
    console.log("favo changed " + eventArgs.isFavorite);
  }
}
