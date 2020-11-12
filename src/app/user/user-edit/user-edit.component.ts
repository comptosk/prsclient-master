import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  pageTitle: string = "Edit User";
  user: User = null;
  activeUser: User;
  isAdmin: boolean;

  save(): void{
    this.userSvc.change(this.user).subscribe(
      res=>{
        console.log("Customer change successful");
        this.router.navigateByUrl("/users/list");
      },
      err=>{
        console.error(err);
      }
    )
  }

  cancel(): void {
    this.router.navigateByUrl("/users/list");
  }


  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private userSvc: UserService,
    private sys: SystemService

  ) { }

  ngOnInit() {
    this.sys.chkLogin();
    let id= this.route.snapshot.params.id;
    this.userSvc.get(+id).subscribe(
      res=>{
        console.log("User", res);
        this.user = res as User;
      },
      err=>{
        console.error(err);
      } 
    );
    this.activeUser = this.sys.activeUser;
    if(this.activeUser.isAdmin == true){
      this.isAdmin = true;
    }
  }

}
