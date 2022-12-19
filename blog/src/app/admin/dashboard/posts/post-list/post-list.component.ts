import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../posts.model';
import { PostsService } from '../posts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy{

public posts: Post[] = [];
private postsSub: Subscription;  // must change "strict": false in tsconfig.js 

constructor(public postService: PostsService){}
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }


  ngOnInit(){
    // this.posts = this.postService.getPosts();
    this.postService.getPosts();
    this.postsSub = this.postService.getUpdatedListener().subscribe((posts: Post[])=>{
      this.posts = posts;
    });


  }

  editPost(post: Post){
    
    alert("Post ID : "+ post.id);
  }
  deletePost(post: Post){
    this.postService.deletePost(post.id);
  }

  updatePost(form: NgForm,post: Post){
    if(form.invalid){
      return;
    }
    this.postService.updatePost(post.id,form.value.title, form.value.content, post.date_Time);
  }

}
