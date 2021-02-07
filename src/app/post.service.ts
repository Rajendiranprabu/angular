import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {

    return this.http.get("https://jsonplaceholder.typicode.com/posts?_limit=20");

  }

  addPost(post: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.http.post("https://jsonplaceholder.typicode.com/posts", post, options).subscribe(res => {
      console.log(res);

    })
  }
}
