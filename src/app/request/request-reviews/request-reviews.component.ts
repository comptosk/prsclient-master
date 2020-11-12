import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-reviews',
  templateUrl: './request-reviews.component.html',
  styleUrls: ['./request-reviews.component.css']
})
export class RequestReviewsComponent implements OnInit {

  activeUser: User;
  isReviewer: boolean = false;
  pageTitle: string = "Requests in Review";
  requests: Request[];
  searchCriteria: string = "";
  sortAsc: boolean = true;
  sortCriteria: string = "id";
  userName: string = null;

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
    this.activeUser = this.sys.activeUser;
    if(this.activeUser.isReviewer == true){
      this.isReviewer = true;
    }
    let id = this.activeUser.id;
    this.reqSvc.getInReview(+id).subscribe(
      res => {
        for(let r of res){
          r.userName = r.user.userName;
        }
        console.log("Requests:", res);
        this.requests = res as Request[];
      },
      err=>{
        console.error(err);
      }
    );

  }

}
