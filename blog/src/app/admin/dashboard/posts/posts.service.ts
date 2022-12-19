import { Injectable } from "@angular/core";
import { Post } from "./posts.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PostsService{
    private posts: Post[] = [];
    private postUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient){}
    getUpdatedListener(){
        return this.postUpdated.asObservable();
    }

    addPost(title: String, content: String, dateTime: any){
        const post : Post = {id: null, title : title, content: content, date_Time: new Date()};
        this.http.post<{message: string}>  // here, have added responce content
        ("http://localhost:8888/api/posts", post)
        .subscribe((response)=>{
            console.log(response.message);
            this.posts.push(post);
            this.postUpdated.next([...this.posts])
        })
    }

    getPosts(){
         this.http.get<{message: String, posts: Post[]}>
        ("http://localhost:8888/api/posts")
        .subscribe(postData=>{
            this.posts = postData.posts;
            this.postUpdated.next([...this.posts]);
        })

        // return [...this.posts];
    }

    deletePost(post_id: number){
        this.http.delete<{message: String, posts: Post[]}>
       ("http://localhost:8888/api/post/delete/"+post_id)
       .subscribe(postData=>{
           this.posts = postData.posts;
           this.postUpdated.next([...this.posts]);
       })

       // return [...this.posts];
   }

   updatePost(id:number,title: String, content: String, dateTime: any){
    const post : Post = {id: id, title : title, content: content, date_Time: new Date()};
    this.http.patch<{message: string, posts: Post[]}>  // here, have added responce content
    ("http://localhost:8888/api/posts", post)
    .subscribe((response)=>{
        this.posts = response.posts;
        this.postUpdated.next([...this.posts]);
    })
}

}