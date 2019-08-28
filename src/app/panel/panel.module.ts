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
import {ProductComponent} from './product/product.component';
import {UsersEffects} from './store/effects/users.effects';
import {AddUserComponent} from './user/add-user/add-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {UsersAuthGuard} from '../_guards/users.auth.guard';
import {CommentComponent} from './comment/comment.component';
import {EditInfoComponent} from './edit-info/edit-info.component';
import {ListNewsComponent} from './admin-news/list-news/list-news';
import { AddEditNewsComponent } from './admin-news/add-edit-news/add-edit-news.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {path: 'products', component: ProductComponent},
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
    ProductComponent,
    AddUserComponent,
    EditUserComponent,
    CommentComponent,
    EditInfoComponent,
    ListNewsComponent,
    AddEditNewsComponent
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
    MatIconModule
  ]
})
export class PanelModule { }
