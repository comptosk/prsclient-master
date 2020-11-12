  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

const baseUrl = "http://localhost:58280/api/vendors"

@Injectable({ 
  providedIn: 'root'
})
export class VendorService { 
  
  constructor(private http: HttpClient) { }

  list(): Observable<Vendor[]>{
    return this.http.get(`${baseUrl}`) as Observable<Vendor[]>;
  }

  get( id: number ): Observable<Vendor>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<Vendor>;
  }

  create( vendor: Vendor ): Observable<Vendor>{
    return this.http.post(`${baseUrl}`, vendor ) as Observable<Vendor>;
  }

  change( vendor: Vendor ): Observable<any>{
    return this.http.put(`${baseUrl}/${vendor.id}`, vendor ) as Observable<any>;
  }

  remove( id: number ): Observable<Vendor>{
    return this.http.delete(`${baseUrl}/${id}` ) as Observable<Vendor>;
  }

}
