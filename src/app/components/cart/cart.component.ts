import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/state/app.state';
import {getOrderedProducts} from '../../store/selectors/products.selectors';
import {Product} from '../../_models/product';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangeOrderedProductQuantity} from '../../store/actions/products.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // public orders: Observable<any[]>;
  public orders: any[];

  public clientForm: FormGroup;

  constructor(
    private store: Store<AppStateInterface>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', Validators.email],
      street: ['', Validators.required],
      house: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      flat: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });

    // this.orders = this.store.select(getOrderedProducts);
    this.store.subscribe((res) => {
      this.orders = res.products.orderedProducts;
    });
  }

  getTotalPrice() {
    let total = 0;

    this.orders.forEach((prod: any) => {
      total += prod.quantity * prod.price;
    });

    return total;
  }

  submitOrder() {
    console.log(this.orders);
    console.log(this.clientForm.value);
    console.log('asdasdasd')
  }

  onChangeQuantity(event, order) {
    order.quantity = event.target.value;
    this.store.dispatch(new ChangeOrderedProductQuantity(order));
  }

  decreaseQuantity(order) {
    order.quantity--;
    this.store.dispatch(new ChangeOrderedProductQuantity(order));
  }

  increaseQuantity(order) {
    order.quantity++;
    this.store.dispatch(new ChangeOrderedProductQuantity(order));
  }
}
