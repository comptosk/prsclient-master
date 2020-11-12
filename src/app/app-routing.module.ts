import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLineCreateComponent } from './requestLine/request-line-create/request-line-create.component';
import { RequestLineEditComponent } from './requestLine/request-line-edit/request-line-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
import { RequestReviewsComponent } from './request/request-reviews/request-reviews.component';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/users/login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/detail/:id', component: ProductDetailComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'products/list', component: ProductListComponent },
  { path: 'requestlines/create/:id', component: RequestLineCreateComponent },
  { path: 'requestlines/edit/:id', component: RequestLineEditComponent },
  { path: 'requests/create', component: RequestCreateComponent },
  { path: 'requests/detail/:id', component: RequestDetailComponent },
  { path: 'requests/edit/:id', component: RequestEditComponent },
  { path: 'requests/lines/:id', component: RequestLinesComponent },
  { path: 'requests/list', component: RequestListComponent },
  { path: 'requests/review/item/:id', component: RequestReviewItemComponent },
  { path: 'requests/reviews', component: RequestReviewsComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/login', component: UserLoginComponent },
  { path: 'vendors/create', component: VendorCreateComponent },
  { path: 'vendors/detail/:id', component: VendorDetailComponent },
  { path: 'vendors/edit/:id', component: VendorEditComponent },
  { path: 'vendors/list', component: VendorListComponent },
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
