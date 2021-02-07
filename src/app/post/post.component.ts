import { Component, OnInit } from '@angular/core';
//import { post } from './model/Post'
import { PostService } from '../post.service';
import { Post } from './Post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  postList: any;
  message: string = '';
  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    this.postService.getAllPosts().subscribe((res: Post[]) => {
      this.postList = res;
    })
    console.log(this.postList)
  }

  enableComment(message: string) {
    this.message = message;
  }

}
