import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL: string = "http://localhost:3000/posts";

  // similar to day34 - slide 22
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // day34 - slide 22
  httpOptions2 = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { 

  }

  getPostById(id: number) : Observable<Post> {
    return this.httpClient.get<Post>(this.baseURL + `/${id}`, {headers: this.httpOptions2});
  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseURL).pipe(
      catchError(this.errorHandler)
    );
  }

  createPost(post: Post) : Observable<Post> {
    return this.httpClient.post<Post>(this.baseURL, post, this.httpOptions);
  }

  editPost(id: number, post: Post) : Observable<Post> {
    return this.httpClient.put<Post>(this.baseURL + `/${id}`, post, this.httpOptions);
  }

  // day 34 - slide 22
  deletePost(id: number) : Observable<Post> {
    return this.httpClient.delete<Post>(this.baseURL + `/${id}`, {headers: this.httpOptions2});
  }

  errorHandler(error: any) {
    let errorMessage: any = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.errorMessage;
    } else {
      errorMessage = `Error code: ${error.status}`;
    }

    return throwError(() => new Error(errorMessage));
  }

}
