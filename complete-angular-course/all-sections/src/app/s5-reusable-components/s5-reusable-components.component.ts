import { Component, OnInit } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 's5-reusable-components',
  templateUrl: './s5-reusable-components.component.html',
  styleUrls: ['./s5-reusable-components.component.css']
})
export class S5ReusableComponentsComponent implements OnInit {
  post = {
    title: "Title",
    isFavorite: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log('fav component changed: isFavorite' + eventArgs.favoriteValue);
  }

}
