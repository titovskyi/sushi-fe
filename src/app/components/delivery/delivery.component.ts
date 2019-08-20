import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/state/app.state';
import {Subscription} from 'rxjs';
import {GetStoreInfo} from '../../store/actions/store-info.actions';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit, OnDestroy {

  public deliveryText: string;
  public map: string;
  sub: Subscription;

  constructor(
    private store: Store<AppStateInterface>,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetStoreInfo());
    this.sub = this.store.subscribe((res: AppStateInterface) => {
      console.log(res);
      this.deliveryText = res.info.info.delivery_info;
      this.map = res.info.info.map;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  methodToGetURL() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.map);
  }
}
