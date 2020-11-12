import { Component, OnInit } from '@angular/core'; 
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu ("Log Out", '/users/login'),
    new Menu ("Users", '/users/list'),
    new Menu ("Vendors", '/vendors/list'),
    new Menu ("Products", '/products/list'),
    new Menu ("Requests", '/requests/list'),
    new Menu ("About", '/about')
  ];

  constructor() { }

  ngOnInit() {
  }

}
