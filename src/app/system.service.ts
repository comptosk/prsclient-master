import { Injectable } from '@angular/core';
import { User } from './user/user.class';
import { Router } from '@angular/router';

const baseUrl = "http://localhost:58280/api"

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  activeUser: User = null;

  constructor(

    private router: Router

  ) { }

  chkLogin(): void {
    if(this.activeUser == null){
     this.router.navigateByUrl('/users/login')
    }
  }


}
