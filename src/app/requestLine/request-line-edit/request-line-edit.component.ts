import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Request } from 'src/app/request/request.class';
import { RequestLine } from '../request-line.class';
import { RequestLineService } from '../request-line.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit { 

  id: number = 0;
  pageTitle: string = "Edit Request Line";
  products: Product[];
  request: Request;
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
    this.requestLine.product = null;
    this.requestLine.id = +this.requestLine.id
    this.requestLine.productId= +this.requestLine.productId;
    this.reqLineSvc.change(this.requestLine).subscribe(
      res => {
        console.log("Request Line edit successful!"),
        this.router.navigateByUrl(`/requests/lines/${this.requestLine.requestId}`);
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
    this.id = +this.route.snapshot.params.id;
    this.prodSvc.list().subscribe(
      res => {
        console.log("Products:", res);
        this.products= res as Product[];
      },
      err => {
        console.error(err);
      }
      );
      this.reqLineSvc.get(+this.id).subscribe(
      res=> this.requestLine = res as RequestLine,
      err=> console.error(err));
    }
}
