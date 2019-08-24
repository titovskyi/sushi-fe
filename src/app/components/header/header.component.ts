import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/state/app.state';
import {StoreInfo} from '../../_models/storeInfo';
import {Subscription} from 'rxjs';
import {GetStoreInfo} from '../../store/actions/store-info.actions';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public navbarOpen = false;
  public isCollapsed = true;

  public info: StoreInfo;

  private sub: Subscription;

  constructor(
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.sub = this.store.subscribe((res: AppStateInterface) => {
      console.log(res);
      this.info = res.info.info;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public getLogo() {
    console.log(`${environment.API}/uploads/${this.info.logo}`);
    return `url(${environment.API}/uploads/${this.info.logo})`;
  }

  public getPhones() {
    return this.info.phone.split(' ');
  }
}
