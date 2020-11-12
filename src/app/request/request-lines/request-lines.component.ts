import { ActivatedRoute, Router } from '@angular/router'; 
import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/request/request.class';
import { RequestLineService } from 'src/app/requestLine/request-line.service';
import { RequestService } from 'src/app/request/request.service';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  pageTitle: string = "Request Lines";
  reqId: number = 0;
  request: Request = null;
  showDelete: boolean = false;
  user: User = null;
  activeUser: User;

  verify(): void {
    this.showDelete = !this.showDelete;
  }

  delete(id: number): void {
    this.showDelete = false;
    this.reqLineSvc.remove(id).subscribe(
      res => {
        console.log("Request Line delete successful!", res);
        this.refresh(this.reqId);
      },
      err => {
        console.error(err);
      }
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

  review(): void {
    this.request.rejectionReason = null;
    this.reqSvc.review(this.request).subscribe(
      res => {
        console.log("Request submitted for review!", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(

    private reqLineSvc: RequestLineService,
    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router, 
    private sys: SystemService

  ) { }

  ngOnInit() {
    this.sys.chkLogin();
    this.reqId = +this.route.snapshot.params.id;
    this.refresh(this.reqId);
    this.activeUser = this.sys.activeUser
  }

}
