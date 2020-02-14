import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SummaryPipe } from './pipes/summary/summary.pipe';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { PeekABooComponent } from './components/peek-aboo/peek-aboo.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    UsersComponent,
    LifecycleComponent,
    PeekABooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
