import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {reducers} from './store/reducers/app.reducers';
import {AdminUserEffect} from './store/effects/admin-user.effects';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import { CommentsComponent } from './components/comments/comments/comments.component';
import {CommentsEffects} from './store/effects/comments.effects';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import {StoreInfoEffects} from './store/effects/store-info.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CommentsComponent,
    ContactsComponent,
    DeliveryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({...reducers}),
    EffectsModule.forRoot([AdminUserEffect, CommentsEffects, StoreInfoEffects]),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
