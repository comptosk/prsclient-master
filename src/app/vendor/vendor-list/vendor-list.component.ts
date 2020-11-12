import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  pageTitle:string = "Vendors List";
  searchCriteria: string = "";
  sortAsc: boolean = true;
  sortCriteria: string = "id";
  vendors: Vendor[];
  activeUser: User;
  isAdmin: boolean;

  sort(col: string): void {
    if(col === this.sortCriteria){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCriteria=col;
    
  }

  constructor(

    private vendSvc: VendorService,
    private sys: SystemService

  ) { }

  ngOnInit() {
    this.sys.chkLogin();
    this.vendSvc.list().subscribe(
      res=>{
        console.log("Vendors:", res);
        this.vendors = res as Vendor[];
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
