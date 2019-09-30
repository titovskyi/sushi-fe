import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/state/app.state';
import {StoreInfo} from '../../_models/storeInfo';
import {Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public info: StoreInfo;

  private sub: Subscription;

  constructor(
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.sub = this.store.subscribe((res: AppStateInterface) => {
      this.info = res.info.info;
    });
  }

  public getLogo() {
    if (this.info.logo) {
      return `url(${environment.API}${this.info.logo})`;
    }
  }

  public getPhones() {
    return this.info.phone.split(' ');
  }
}
