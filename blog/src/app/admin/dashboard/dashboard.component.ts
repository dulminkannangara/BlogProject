import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../dashboard/posts/posts.model';
import { PostsService } from '../dashboard/posts/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{

  public posts: Post[] = [];
  private postsSub: Subscription; 
  constructor(public postService: PostsService){}
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
  ngOnInit(): void {
    this.postService.getPosts();
    this.postsSub = this.postService.getUpdatedListener().subscribe((posts: Post[])=>{
      this.posts = posts;
    });
  }

}
