import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {Store, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers/panel.reducers';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import {UserComponent} from './user/user.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AdminComponent} from './admin/admin.component';
import {UsersEffects} from './store/effects/users.effects';
import {AddUserComponent} from './user/add-user/add-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {UsersAuthGuard} from '../_guards/users.auth.guard';
import {CommentComponent} from './comment/comment.component';
import {EditInfoComponent} from './edit-info/edit-info.component';
import {ListNewsComponent} from './admin-news/list-news/list-news.component';

import { AddEditNewsComponent } from './admin-news/add-edit-news/add-edit-news.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { AddEditProductComponent } from './product/add-edit-product/add-edit-product.component';
import {AuthGuard} from '../_guards/auth.guard';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {path: 'products', component: ListProductComponent},
  {path: 'add-edit-product', component: AddEditProductComponent, canActivate: [AuthGuard]},
  {path: 'add-edit-product/:id', component: AddEditProductComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserComponent, canActivate: [UsersAuthGuard]},
  {path: 'comments', component: CommentComponent, canActivate: [UsersAuthGuard]},
  {path: 'store-info', component: EditInfoComponent, canActivate: [UsersAuthGuard]},
  {path: 'news', component: ListNewsComponent, canActivate: [UsersAuthGuard]},
  {path: 'add-edit-news', component: AddEditNewsComponent, canActivate: [UsersAuthGuard]},
  {path: 'add-edit-news/:id', component: AddEditNewsComponent, canActivate: [UsersAuthGuard]},
];

@NgModule({
  declarations: [
    UserComponent,
    SidebarComponent,
    AdminComponent,
    AddUserComponent,
    EditUserComponent,
    CommentComponent,
    EditInfoComponent,
    ListNewsComponent,
    AddEditNewsComponent,
    ListProductComponent,
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('panel', {...reducers}),
    EffectsModule.forFeature(([UsersEffects])),
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class PanelModule { }
