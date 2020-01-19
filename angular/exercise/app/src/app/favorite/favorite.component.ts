import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  someText = "hello";
  constructor() { }

  ngOnInit() {
  }

  onClick($event){
    console.log("button clicked");
  }

}
