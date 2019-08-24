import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.sub = this.store.subscribe((res: any) => {
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
