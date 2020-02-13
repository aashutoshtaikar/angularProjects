import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SummaryPipe } from './summary.file';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { PanelComponent } from './components/panel/panel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ZippyComponent } from './components/zippy/zippy.component';
// import { CoursesService } from './services/courses/courses.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    // CoursesService //this is not required from angular6 can be included in service decorator as providedIn
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
