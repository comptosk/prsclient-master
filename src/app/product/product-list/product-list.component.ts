import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Products List"
  products: Product[];
  searchCriteria: string = "";
  sortAsc: boolean = true;
  sortCriteria: string = "id";
  activeUser: User;
  isAdmin: boolean;

  sort(col: string): void {
    if (col === this.sortCriteria){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCriteria = col;
  }

  constructor(

    private prodSvc: ProductService,
    private sys: SystemService

  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.prodSvc.list().subscribe(
      res => {
        for(let p of res){
          p.vendorName = p.vendor.name
        }
        console.log("Products:", res);
        this.products = res as Product[];
      },
      err => {
        console.error(err);
      }
    );
    this.activeUser = this.sys.activeUser;
    if(this.activeUser.isAdmin == true){
      this.isAdmin = true;
    }
  }

}
