import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  activeUser: User;
  pageTitle: string = "Create New Request";
  request: Request = new Request;
  users: User[];
  error: boolean = false;


  constructor(

    private reqSvc: RequestService,
    private router: Router,
    private sys: SystemService,

  ) { }

  save(): void {
    this.sys.chkLogin();
    this.request.userId = +this.activeUser.id;
    // this.request.deliveryMode = this.request.deliveryMode;
    this.reqSvc.create(this.request).subscribe(
      res => {
        console.log("Request create successful!", res);
        this.router.navigateByUrl('requests/list');
      },
      err => {
        this.error = !this.error
        console.error(err);
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl('/requests/list');
  }

  ngOnInit() {
    this.activeUser = this.sys.activeUser;
  }
}
