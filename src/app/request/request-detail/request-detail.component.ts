import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  pageTitle: string = "Request Detail";
  request: Request = null;
  showDelete: boolean = false;
  activeUser: User;
  isAdmin: boolean;
  

  verify(): void { 
    this.showDelete = !this.showDelete;
  }

  delete(): void {
    this.reqSvc.remove(this.request.id).subscribe(
      res => {
        console.log("Request delete successful!", res);
        this.router.navigateByUrl("/requests/list");
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
    let id = this.route.snapshot.params.id;
    this.reqSvc.get(+id).subscribe(
      res => {
        console.log("Request", res);
        this.request = res as Request;
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
