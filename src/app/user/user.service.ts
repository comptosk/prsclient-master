import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const baseUrl= "http://localhost:58280/api/users"

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  list(): Observable<User[]>{
    return this.http.get(`${baseUrl}`) as Observable<User[]>;
  }

  get( id: number ): Observable<User>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<User>;
  }

  create( user: User ): Observable<User>{
    return this.http.post(`${baseUrl}`, user ) as Observable<User>;
  }

  change( user: User ): Observable<any>{
    return this.http.put(`${baseUrl}/${user.id}`, user ) as Observable<any>;
  }

  remove( id: number ): Observable<User>{
    return this.http.delete(`${baseUrl}/${id}` ) as Observable<User>;
  }

  verifyLogin(userName: string, password: string): Observable<User>{
    return this.http.get(`${baseUrl}/${userName}/${password}`) as Observable<User>;
  }

}
