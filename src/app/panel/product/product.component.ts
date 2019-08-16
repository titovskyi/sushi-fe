import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch({type: 'LOAD_USERS'});
    this.store.subscribe((res: any) => {
      console.log(res);
    });
  }

}
