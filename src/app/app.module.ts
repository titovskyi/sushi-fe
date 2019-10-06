import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {REDUCER_TOKEN, reducers} from './store/reducers/app.reducers';
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
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {CommentsComponent} from './components/comments/comments/comments.component';
import {CommentsEffects} from './store/effects/comments.effects';
import {ContactsComponent} from './components/contacts/contacts.component';
import {DeliveryComponent} from './components/delivery/delivery.component';
import {StoreInfoEffects} from './store/effects/store-info.effects';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ButtonsModule } from 'ngx-bootstrap/buttons';

import {CollapseModule} from 'ngx-bootstrap/collapse';
import {AngularFontAwesomeModule} from 'angular-font-awesome'

import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NewsComponent} from './components/news/news.component';
import {StoreNewsEffects} from './store/effects/store-news.effects';
import {NewsCardComponent} from './components/news/news-card/news-card.component';

registerLocaleData(localeRu);

// ADD for ngx-slider

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NewsPopupComponent } from './components/news/news-popup/news-popup.component';
import {ProductsEffects} from './store/effects/products.effects';
import { ProductCardComponent } from './components/home/product-card/product-card.component';
import { ProductPopupComponent } from './components/home/product-popup/product-popup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductCategoryComponent } from './components/home/product-category/product-category.component';
import { CartComponent } from './components/cart/cart.component';
import { ErrorPopupComponent } from './components/error-popup/error-popup.component';
import {PosterEffects} from './store/effects/poster.effects';
import { SuccessPopupComponent } from './components/cart/success-popup/success-popup.component';
import { CartErrorPopupComponent } from './components/cart/error-popup/cart-error-popup.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CommentsComponent,
    ContactsComponent,
    DeliveryComponent,
    NewsComponent,
    NewsCardComponent,
    NewsPopupComponent,
    ProductCardComponent,
    ProductPopupComponent,
    PageNotFoundComponent,
    ProductCategoryComponent,
    CartComponent,
    ErrorPopupComponent,
    SuccessPopupComponent,
    CartErrorPopupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot([
      AdminUserEffect,
      CommentsEffects,
      StoreInfoEffects,
      StoreNewsEffects,
      ProductsEffects,
      PosterEffects
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    CollapseModule.forRoot(),
    AngularFontAwesomeModule,
    NgxPageScrollCoreModule,
    CarouselModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'RU' },
    { provide: REDUCER_TOKEN, useValue: reducers }
  ],
  entryComponents: [
    NewsPopupComponent,
    ProductPopupComponent,
    ErrorPopupComponent,
    SuccessPopupComponent,
    CartErrorPopupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
