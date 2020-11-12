import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';

const baseUrl: string = "http://localhost:58280/api/requests";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  constructor(private http: HttpClient) { }
  
  list(): Observable<Request[]>{
    return this.http.get(`${baseUrl}`) as Observable<Request[]>;
  }

  get( id: number ): Observable<Request>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<Request>;
  }

  create( request: Request ): Observable<Request>{
    return this.http.post(`${baseUrl}`, request ) as Observable<Request>;
  }

  change( request: Request ): Observable<any>{
    return this.http.put(`${baseUrl}/${request.id}`, request ) as Observable<any>;
  }

  remove( id: number ): Observable<Request>{
    return this.http.delete(`${baseUrl}/${id}` ) as Observable<Request>;
  }

  review( request : Request ): Observable<any> {
    return this.http.put(`${baseUrl}/review`, request) as Observable<any>; 
  }

  getInReview ( id: number ): Observable<Request[]> {
    return this.http.get(`${baseUrl}/reviews/${id}`) as Observable<Request[]>;
  }

  approve( request : Request ): Observable<any> {
    return this.http.put(`${baseUrl}/approve`, request) as Observable<any>; 
  }
  
  reject( request : Request ): Observable<any> {
    return this.http.put(`${baseUrl}/reject`, request) as Observable<any>; 
  }

}
