import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.serverUrl + '/api/users';
  }

  getUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.url)
  }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(this.url + `/${username}`)
  }

  getUserByUserPassword(user: User): Observable<any> {
    return this.httpClient.get<any>(this.url + `/${user.username}/${user.password}`)
  }

  deleteUser(username: string): Observable<any> {
    return this.httpClient.delete(this.url + `/${username}`)
  }

  updateUser(user: User): Observable<any> {
    return this.httpClient.put(this.url + `/${user.username}`, user)
  }

  addUser(user: User): Observable<any> {
    return this.httpClient.post(this.url, user)
  }
}
