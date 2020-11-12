import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLine } from './request-line.class';

const baseUrl: string = "http://localhost:58280/api/requestlines";

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  constructor(private http: HttpClient) { }

  list(): Observable<RequestLine[]>{
    return this.http.get(`${baseUrl}`) as Observable<RequestLine[]>;
  }

  get( id: number ): Observable<RequestLine>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<RequestLine>;
  }

  create( requestline: RequestLine ): Observable<RequestLine>{
    return this.http.post(`${baseUrl}`, requestline ) as Observable<RequestLine>;
  }

  change( requestline: RequestLine ): Observable<any>{
    return this.http.put(`${baseUrl}/${requestline.id}`, requestline ) as Observable<any>;
  }

  remove( id: number ): Observable<RequestLine>{
    return this.http.delete(`${baseUrl}/${id}` ) as Observable<RequestLine>;
  }

}
