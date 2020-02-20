import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts;
  constructor(private postService: PostService) { }

  ngOnInit() {
    // this.postService.getPostsFullDemo().subscribe(data=>{
    //   console.log(data[0].body);
    // });

    // this.postService.getPostsFailDemo().subscribe(data=>{
    //   console.log(data[0].body);
    // }, (error:HttpErrorResponse)=>console.log('error occured:' + error.message));

    this.postService.getPostsFailGlobalErrorHandlingDemo().subscribe(data => {
      console.log(data[0].body)
    });


    // this.postService.getPostsHeaderDemo().subscribe(data=>{
    //   console.log(data[0].body);
    // }, (error:HttpErrorResponse)=>console.log('error occured:' + error.message));

  }

}
