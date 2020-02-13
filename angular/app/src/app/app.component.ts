import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    title: "title",
    isFavorite: true
  }

  onFavoriteChanged(isFavorite){
    console.log("favorite changed favorite:" + isFavorite);
  }

  someFunction(title){
    console.log("title is:" + title);
  }
}
