import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/reducers/panel.reducers';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import {UserComponent} from './user/user.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AdminComponent} from './admin/admin.component';
import {ProductComponent} from './product/product.component';
import {UsersEffects} from './store/effects/users.effects';

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
    RouterModule.forChild(routes),
    StoreModule.forFeature('panel', {...reducers}),
    EffectsModule.forFeature(([UsersEffects])),
    MatSidenavModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class PanelModule { }
