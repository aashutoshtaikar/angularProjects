import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './summary.file';
import { FavoriteComponent } from './favorite/favorite.component';
// import { CoursesService } from './services/courses/courses.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // CoursesService //this is not required from angular6 can be included in service decorator as providedIn
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
