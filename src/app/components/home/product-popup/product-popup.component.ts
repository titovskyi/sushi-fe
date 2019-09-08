import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {StoreNews} from '../../../_models/storeNews';
import {Product} from '../../../_models/product';
import {AddOrderedProduct} from '../../../store/actions/products.action';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../../store/state/app.state';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.scss']
})
export class ProductPopupComponent implements OnInit {
  private orderedProducts: any[];

  constructor(
    public dialogRef: MatDialogRef<ProductPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.store.subscribe((res) => {
      this.orderedProducts = res.products.orderedProducts;
    });
  }

  orderProduct(product) {
    event.stopPropagation();

    const order = {...product, quantity: 1};
    const presentProductInOrder = this.orderedProducts.findIndex((prod) => prod.name === product.name);

    if (presentProductInOrder !== -1) {
      this.orderedProducts[presentProductInOrder].quantity++;
    } else {
      this.orderedProducts.push(order);
    }

    this.store.dispatch(new AddOrderedProduct(this.orderedProducts));
  }

  onCloseClick() {
    this.dialogRef.close();
  }

}
