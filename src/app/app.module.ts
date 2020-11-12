import { AboutComponent } from './core/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { E404Component } from './core/e404/e404.component';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { NgModule } from '@angular/core';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductSearchPipe } from './product/product-search.pipe';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLineCreateComponent } from './requestLine/request-line-create/request-line-create.component';
import { RequestLineEditComponent } from './requestLine/request-line-edit/request-line-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
import { RequestReviewsComponent } from './request/request-reviews/request-reviews.component';
import { RequestSearchPipe } from './request/request-search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSearchPipe } from './user/user-search.pipe';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    E404Component,
    HomeComponent,
    MenuComponent,
    MenuItemComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductSearchPipe,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestLineCreateComponent,
    RequestLineEditComponent,
    RequestLinesComponent,
    RequestListComponent,
    RequestReviewItemComponent,
    RequestReviewsComponent,
    RequestSearchPipe,
    SortPipe,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserListComponent,
    UserLoginComponent,
    UserSearchPipe,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    VendorSearchPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
