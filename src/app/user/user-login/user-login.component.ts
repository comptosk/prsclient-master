import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userName: string = "";
  password: string = "";
  activeUser: User = null;
  error: boolean = false;

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private userSvc: UserService,
    private sys: SystemService

  ) { }

  logIn(): User {
    if(this.userName == null || this.password == null)
    return;
    this.userSvc.verifyLogin(this.userName, this.password).subscribe(
      res => {
        this.activeUser = res;
        console.log("activeUser:", res),
        this.sys.activeUser = this.activeUser;
        this.router.navigateByUrl('/requests/list');
      },
      err => {
        this.error = true;
        console.error(err);
      }
      );
  }

  ngOnInit() {
  }

}
