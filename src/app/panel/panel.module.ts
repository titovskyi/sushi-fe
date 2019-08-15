import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {path: 'products', component: ProductComponent},
  {path: 'users', component: UserComponent}
];

@NgModule({
  declarations: [
    UserComponent,
    SidebarComponent,
    AdminComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PanelModule { }
