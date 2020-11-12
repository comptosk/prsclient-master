import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  pageTitle: string = "Add Product to Order";
  products: Product[];
  requestId: number= 0;
  requestLine: RequestLine = new RequestLine();

  constructor(

    private prodSvc: ProductService,
    private reqLineSvc: RequestLineService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService

  ) { }

  save(): void {
    this.requestLine.requestId = +this.requestId;
    this.requestLine.productId= +this.requestLine.productId;
    this.reqLineSvc.create(this.requestLine).subscribe(
      res => {
        console.log("Request Line create Successful!"),
        this.router.navigateByUrl(`/requests/lines/${this.requestId}`);
      },
      err => {
        console.error(err);
      }
      );
  }

  cancel(): void {
    this.router.navigateByUrl(`/requests/lines/${this.requestId}`)
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.requestId = +this.route.snapshot.params.id;
    this.prodSvc.list().subscribe(
      res => {
        console.log(res);
        this.products= res as Product[];
      },
      err => {
        console.error(err);
      }
      );
  }

}
