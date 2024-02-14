import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(public postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe({
      next: (data: Post[]) => {
        this.posts = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}

