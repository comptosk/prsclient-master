import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.class';

const baseUrl: string = "http://localhost:58280/api/products";

@Injectable({
  providedIn: 'root' 
})
export class ProductService {

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]>{
    return this.http.get(`${baseUrl}`) as Observable<Product[]>;
  }

  get( id: number ): Observable<Product>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<Product>;
  }

  create( product: Product ): Observable<Product>{
    return this.http.post(`${baseUrl}`, product ) as Observable<Product>;
  }

  change( product: Product ): Observable<any>{
    return this.http.put(`${baseUrl}/${product.id}`, product ) as Observable<any>;
  }

  remove( id: number ): Observable<Product>{
    return this.http.delete(`${baseUrl}/${id}` ) as Observable<Product>;
  }

}