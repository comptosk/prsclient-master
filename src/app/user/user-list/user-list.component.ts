import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle: string = "Users List";
  searchCriteria: string = "";
  sortAsc: boolean = true;
  sortCriteria: string = "id";
  users: User[];
  activeUser: User;
  isAdmin: boolean = false;

  sort(col: string): void {
    if(col === this.sortCriteria){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCriteria = col;
  }

  constructor(

    private userSvc: UserService,
    private sys: SystemService 

  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.userSvc.list().subscribe(
      res => {
        console.log("Users:", res);
        this.users = res as User[];
      }
    );
    this.activeUser = this.sys.activeUser;
    if(this.activeUser.isAdmin == true){
      this.isAdmin = true;
    }
  }

}
