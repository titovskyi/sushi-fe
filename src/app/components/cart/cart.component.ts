import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/state/app.state';
import {getOrderedProducts} from '../../store/selectors/products.selectors';
import {Product} from '../../_models/product';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangeOrderedProductQuantity} from '../../store/actions/products.action';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PosterService} from '../../_services/poster.service';
import {MatDialog} from '@angular/material';
import {SuccessPopupComponent} from './success-popup/success-popup.component';
import {CartErrorPopupComponent} from './error-popup/cart-error-popup.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // public orders: Observable<any[]>;
  public orders: any[];
  public posterProducts: any[];

  public clientForm: FormGroup;

  constructor(
    private store: Store<AppStateInterface>,
    private fb: FormBuilder,
    private http: HttpClient,
    private posterService: PosterService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required]],
      email: ['', Validators.email],
      street: ['', Validators.required],
      house: ['', Validators.required],
      flat: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });

    this.store.subscribe((res) => {
      this.orders = res.products.orderedProducts;
      this.posterProducts = res.products.products;

      this.orders.forEach((item) => {
        if (item && item.product_image && item.product_image.indexOf('/') === -1) {
          item.product_image = `${environment.API}${item.product_image}`;
        }
      });

      this.posterProducts.forEach((posterItem) => {
        const mergeProd = this.orders.find((prod) => prod.name === posterItem.product_name);
        if (mergeProd) {
          const mergeProdIndex = this.orders.findIndex((prod) => prod.name === posterItem.product_name);
          posterItem = {...posterItem, ...mergeProd};
          this.orders[mergeProdIndex] = posterItem;
        }
      });
    });
  }

  getTotalPrice() {
    let total = 0;

    this.orders.forEach((prod: any) => {
      total += prod.count * prod.price;
    });

    return total;
  }

  submitOrder() {
    const fullAdress = `${this.clientForm.get('street').value}, ${this.clientForm.get('house').value}/${this.clientForm.get('flat').value}`;

    const posterOrder = {
      spot_id: 1,
      phone: this.clientForm.get('phone').value,
      first_name: this.clientForm.get('name').value,
      email: this.clientForm.get('email').value,
      address: fullAdress,
      products: this.orders
    };

    this.posterService.postOrder(posterOrder).subscribe((res: any) => {
      if (res.response) {
        this.dialog.open(SuccessPopupComponent, {
          width: '250px',
          data: res
        });
      } else {
        this.dialog.open(CartErrorPopupComponent, {
          width: '250px',
          data: res
        });
      }

    });

  }

  onChangeQuantity(event, order) {
    order.count = event.target.value;
    this.store.dispatch(new ChangeOrderedProductQuantity(order));
  }

  decreaseQuantity(order) {
    if (order.count) {
      order.count--;
      this.store.dispatch(new ChangeOrderedProductQuantity(order));
    }
  }

  increaseQuantity(order) {
    order.count++;
    this.store.dispatch(new ChangeOrderedProductQuantity(order));
  }
}
