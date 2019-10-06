import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Product} from '../../../_models/product';
import {ProductPopupComponent} from '../product-popup/product-popup.component';
import {environment} from '../../../../environments/environment';
import {AddOrderedProduct} from '../../../store/actions/products.action';
import {AppStateInterface} from '../../../store/state/app.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  private orderedProducts: any[];

  constructor(
    public dialog: MatDialog,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.store.subscribe((res) => {
      this.orderedProducts = res.products.orderedProducts;
    });
  }

  showProductPopup() {
    const dialogRef = this.dialog.open(ProductPopupComponent, {
      width: '80%',
      data: this.product
    });
  }

  orderProduct(product) {
    event.stopPropagation();

    const order = {...product, count: 1};
    const presentProductInOrder = this.orderedProducts.findIndex((prod) => prod.name === product.name);

    if (presentProductInOrder !== -1) {
      this.orderedProducts[presentProductInOrder].count++;
    } else {
      this.orderedProducts.push(order);
    }

    this.store.dispatch(new AddOrderedProduct(this.orderedProducts));
  }
}
