import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
