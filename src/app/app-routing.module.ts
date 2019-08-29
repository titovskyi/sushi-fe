import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_guards/auth.guard';
import {CommentsComponent} from './components/comments/comments/comments.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {DeliveryComponent} from './components/delivery/delivery.component';
import {NewsComponent} from './components/news/news.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'news', component: NewsComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'panel',
    canActivate: [AuthGuard],
    loadChildren: './panel/panel.module#PanelModule'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
