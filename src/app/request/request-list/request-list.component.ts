import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  nameName: string = null;
  pageTitle: string = "Requests List";
  requests: Request[];
  searchCriteria: string = "";
  sortAsc: boolean = true;
  sortCriteria: string = "id";
  userName: string = null;
  activeUser: User;
  isReviewer: boolean = false;

  sort(col: string): void {
    if (col === this.sortCriteria){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCriteria = col; 
  }

  constructor(

    private reqSvc: RequestService,
    private sys: SystemService

  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.reqSvc.list().subscribe(
    res => {
      for(let r of res){
        r.userName = r.user.userName;
        r.nameName = r.user.firstName + "  " + r.user.lastName;
      }
      console.log("Requests:", res);
      this.requests = res as Request[];
    },
    err=>{
      console.error(err);
    }
  );
  this.activeUser = this.sys.activeUser;
  if(this.activeUser.isReviewer == true){
    this.isReviewer = true;
  }
  }
}
