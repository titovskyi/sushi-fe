import { Component, OnInit } from '@angular/core';
import {Product} from '../../../_models/product';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../../store/state/app.state';
import {DomSanitizer} from '@angular/platform-browser';
import {GetProducts, RemoveProduct} from '../../../store/actions/products.action';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  public products: Product[] = [];

  private sub: Subscription;

  constructor(
    private store: Store<AppStateInterface>,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetProducts());
    this.store.subscribe((res) => {
      this.products = res.products.products;
    });
  }

  getSafeUrl(imageName) {
    return this.domSanitizer.bypassSecurityTrustUrl(`${environment.API}${imageName}`);
  }

  removeProduct(productId) {
    this.store.dispatch(new RemoveProduct(productId));
  }

}
