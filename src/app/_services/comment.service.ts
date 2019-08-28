import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.COMMENT}`);
  }

  createComment(newComment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${environment.COMMENT}`, newComment);
  }

  removeComment(commentId: number) {
    return this.http.delete<any>(`${environment.COMMENT}/${commentId}`);
  }
}
