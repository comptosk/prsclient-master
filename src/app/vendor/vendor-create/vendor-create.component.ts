import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  pageTitle: string = "Create New Vendor";
  vendor: Vendor = new Vendor();
  activeUser: User;
  isAdmin: boolean;

  constructor(

    private router: Router,
    private vendSvc: VendorService,
    private sys: SystemService

  ) { }

  save(): void {
    this.vendSvc.create(this.vendor).subscribe(
      res => {
        console.log("Vendor create Successful!", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err => {
        console.error(err);
      }
      );
  }
  
  cancel(): void {
    this.router.navigateByUrl("/vendors/list")
  }

  ngOnInit() {
    this.sys.chkLogin();
    this.activeUser = this.sys.activeUser;
    if(this.activeUser.isAdmin == true){
      this.isAdmin = true;
    }
  }

}
