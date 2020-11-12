import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pageTitle: string = "Create New User"
  user: User = new User();
  activeUser: User;
  isAdmin: boolean;

  constructor(

    private router: Router,
    private userSvc: UserService,
    private sys: SystemService

  ) { }

  save(): void {
    this.userSvc.create(this.user).subscribe(
      res => {
        console.log("User create Successful!", res),
        this.router.navigateByUrl('/users/list');
      },
      err => {
        console.error(err);
      }
      );
  }

  cancel (): void{
    this.router.navigateByUrl('/users/list');
  }

  ngOnInit() {
    this.sys.chkLogin();
    this.activeUser = this.sys.activeUser;
    if(this.activeUser.isAdmin == true){
      this.isAdmin = true;
    }
  }

}
