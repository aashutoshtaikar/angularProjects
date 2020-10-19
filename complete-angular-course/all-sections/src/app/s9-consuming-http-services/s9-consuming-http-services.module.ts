import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S9ConsumingHttpServicesComponent } from './s9-consuming-http-services.component';
import { PostsComponent } from './components/posts/posts.component';



@NgModule({
  declarations: [S9ConsumingHttpServicesComponent, PostsComponent],
  imports: [
    CommonModule
  ],
  exports: [S9ConsumingHttpServicesComponent]
})
export class S9ConsumingHttpServicesModule { }
