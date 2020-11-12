import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pageTitle: string = "User Detail"
  showDelete: boolean = false;
  user: User = null;
  activeUser: User;
  isAdmin: boolean;

  verify(): void { 
    this.showDelete = !this.showDelete;
  }
  
  delete(): void {
    this.userSvc.remove(this.user.id).subscribe(
      res => {
        console.log("User delete successful", res);
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private userSvc: UserService,
    private sys: SystemService

  ) { }

  ngOnInit() {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.userSvc.get(+id).subscribe(
      res => {
        console.log("User", res);
        this.user = res as User;
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
