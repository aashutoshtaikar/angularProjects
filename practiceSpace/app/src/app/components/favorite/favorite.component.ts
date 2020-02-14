import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export class FavoriteStatus{
  constructor(public isFavorite: boolean){}
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() testData:string;
  @Input() isFavorite:boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    //passing data
    this.change.emit(new FavoriteStatus(this.isFavorite)); 
  }

}
