import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product: Product = null;
  showDelete: boolean = false;
  activeUser: User;
  isAdmin: boolean;

  verify(): void { 
    this.showDelete = !this.showDelete;
  }

  delete(): void {
    this.prodSvc.remove(this.product.id).subscribe(
      res => {
        console.log("Product delete successful!", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(

    private prodSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService

  ) { }

  ngOnInit(): void { 
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.prodSvc.get(+id).subscribe(
      res => {
        console.log("Product", res);
        this.product = res as Product;
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