import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  activeUser: User;
  pageTitle: string = "Review Request";
  rejectShow: boolean = false;
  rejectionReason: string = '';
  reqId: number = 0;
  request: Request = null;
  showDelete: boolean = false;
  user: User = null;
  isReviewer: boolean;

  approve(): void {
    this.request.rejectionReason = null;
    this.reqSvc.approve(this.request).subscribe(
      res => {
        console.log("Request approve successful!", res);
        this.router.navigateByUrl("requests/reviews");
      },
      err => {
        console.error(err);
      }
    );
  }
  
  rejectReason(): void {
    this.rejectShow = !this.rejectShow;
  }

  reject(): void {
    this.request.rejectionReason = this.rejectionReason;
    this.reqSvc.reject(this.request).subscribe(
      res => {
        console.log("Request reject successful!", res);
        this.router.navigateByUrl("requests/reviews")
      },
    );
  }

  refresh(id: number): void {
    this.reqSvc.get(id).subscribe(
      res => {
        console.log("Request", res);
        this.request = res as Request;
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(

    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService

  ) { }

  ngOnInit() {
    this.sys.chkLogin();
    this.reqId = +this.route.snapshot.params.id;
    this.refresh(this.reqId);
    this.activeUser = this.sys.activeUser;
    if(this.activeUser.isReviewer == true){
      this.isReviewer = true;
    }
  }

}
