import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  pageTitle: string = "Vendor Detail";
  showDelete: boolean = false;
  vendor: Vendor = null;
  activeUser: User;
  isAdmin: boolean;

  verify(): void { 
    this.showDelete = !this.showDelete;
  }
  
  delete(): void {
    this.vendSvc.remove(this.vendor.id).subscribe(
      res => {
        console.log("Vendor delete successful!", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private vendSvc: VendorService,
    private sys: SystemService

  ) { }

  ngOnInit() {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.vendSvc.get(+id).subscribe(
      res => {
        console.log("Vendor", res);
        this.vendor = res as Vendor;
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
