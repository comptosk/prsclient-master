import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  pageTitle: string = "Edit Vendor";
  vendor: Vendor = null;
  activeUser: import("c:/repos/prs/prsclient/src/app/user/user.class").User;
  isAdmin: boolean;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private vendSvc: VendorService,
    private sys: SystemService

  ) { }

  save(): void{
    this.vendSvc.change(this.vendor).subscribe(
      res=>{
        console.log("Vendor edit successful!", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err=>{
        console.error(err);
      }
    )
  }

  cancel(): void {
    this.router.navigateByUrl("/vendors/list")
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id= this.route.snapshot.params.id;
    this.vendSvc.get(+id).subscribe(
      res=>{
        console.log("Vendor", res);
        this.vendor = res as Vendor;
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
