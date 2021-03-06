import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Comment} from "./comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.serverUrl + '/api/Comments';
  }

  getComments(): Observable<Array<Comment>> {
    return this.httpClient.get<Array<Comment>>(this.url)
  }

  getCommentsByPost(id: string): Observable<Array<Comment>> {
    return this.httpClient.get<Array<Comment>>(this.url + `/${id}`)
  }

  deleteComment(id: string): Observable<any> {
    return this.httpClient.delete(this.url + `/${id}`)
  }

  updateComment(comment: Comment): Observable<any> {
    return this.httpClient.put(this.url + `/${comment.id}`, comment)
  }

  addComment(comment: Comment): Observable<any> {
    return this.httpClient.post(this.url, comment)
  }
}
