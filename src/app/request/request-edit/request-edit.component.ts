import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  pageTitle: string = "Edit Request";
  request: Request = null;
  user: User = null;
  activeUser: User;

  save(): void {
    this.request.userId = +this.request.userId;
    this.reqSvc.change(this.request).subscribe(
      res => {
        console.log("Request edit successful!", res);
        this.router.navigateByUrl('/requests/list');
      },
      err => {
        console.error(err);
      }
    );
  }
  
  cancel(): void {
    this.router.navigateByUrl('/requests/list');
  }

  constructor(

    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService

  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id= this.route.snapshot.params.id;
    this.reqSvc.get(+id).subscribe(
      res=>{
        console.log("Request", res);
        this.request = res as Request;
      },
      err=>{
        console.error(err);
      }
    );
    this.activeUser = this.sys.activeUser
  }

}
