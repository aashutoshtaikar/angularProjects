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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { AppInterceptorService } from './services/interceptors/appInterceptor/app-interceptor.service';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoadingScreenInterceptor } from './services/interceptors/loading-screen-interceptor/loading-screen-interceptor.service';
import { InMemoryExampleComponent } from './components/in-memory-example/in-memory-example.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    ZippyComponent,
    UserComponent,
    PostComponent,
    LoadingSpinnerComponent,
    InMemoryExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    InMemoryWebApiModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }
    // CoursesService //this is not required from angular6 can be included in service decorator as providedIn
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
