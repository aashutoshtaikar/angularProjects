import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 's5-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.Emulated //default angular emulates shadowDom for incompatible browsers
  // encapsulation: ViewEncapsulation.ShadowDom //native support must be there in browsers
  // encapsulation: ViewEncapsulation.None // css styles will leak outside the component
  
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Output() favoriteComponentChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.favoriteComponentChanged.emit(<FavoriteChangedEventArgs>{favoriteValue:this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs{
  favoriteValue: boolean;
}
