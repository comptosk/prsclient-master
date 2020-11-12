import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit { 

  pageTitle: string = "Edit Product";
  product: Product = null;
  vendors: Vendor[];
  activeUser:  User;
  isAdmin: boolean;

  save(): void {
    this.product.vendorId = +this.product.vendorId;
    this.prodSvc.change(this.product).subscribe(
      res => {
        console.log("Product edit successful!", res);
        this.router.navigateByUrl('/products/list');
      },
      err => {
        console.error(err);
      }
    );
  }
  
  cancel(): void {
    this.router.navigateByUrl('/products/list');
  }

  constructor(

    private prodSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendSvc: VendorService,
    private sys: SystemService

  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.vendSvc.list().subscribe(
      res => {
        console.log("Vendors:", res);
      this.vendors = res as Vendor[];
      },
      err => {
        console.error(err)
      }
    );
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
