import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) { 
    // should be very small and lightweight
    // should not call http
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.postService.getAll()
    .subscribe(response=>{
      this.posts = <any[]>response;
    //  console.log(response); 
    });
  }

  createPost(input){
    let post: any = { title: input.value };

    this.postService.create(post)
      .subscribe(response=>{
        post.id = response['id'];
        // this.posts.push(post); //will add post to the end of posts
        this.posts.splice(0, 0, post); // to add post to the start of posts
        console.log(post);
      }, (error: AppError)=>{
        alert('App error');
        console.log(error); // use logger
        if (error instanceof BadRequestError) {
          // this.form.setErrors(error.originalError); // can set form errors for the view template
          alert('Error occured while creating a post, post not found');
          console.log(error); // use logger  
        } else throw error; // rethrow error to be handled by global error handler
      });
  }

  updatePost(post){
    this.postService.update(post)
      .subscribe(response=>{
        console.log(response);
      }); // patch is only to modify certain properties of the object

    // this.http.put(this.url, JSON.stringify(post)); // to modify the entire object
  }

  deletePost(post){
    this.postService.delete(post.id) // add 345 in param to check the error
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          console.log(response);
        }, 
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('AppError, Post not found');
          } else if (error instanceof BadRequestError){
            alert('AppError, Bad Request Error occured');
            // console.log(error);
          } else throw error; // rethrow error to be handled by global error handler
          // console.log(error); // use logger
        }
      );
  }

}
