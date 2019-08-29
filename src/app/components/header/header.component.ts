import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/state/app.state';
import {StoreInfo} from '../../_models/storeInfo';

import {Subscription} from 'rxjs';
import {NavigationStart, Router} from '@angular/router';

import {environment} from '../../../environments/environment';
import {NavigationService} from '../../_services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public navbarOpen = false;
  public isCollapsed = true;
  public routingValue: boolean;
  public info: StoreInfo;

  private sub: Subscription;

  constructor(
    private store: Store<AppStateInterface>,
    private navService: NavigationService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routingValue = event.url === '/' || event.url.indexOf('home') !== -1;
      }
    });
  }

  ngOnInit() {
    this.sub = this.store.subscribe((res: AppStateInterface) => {
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
    if (this.info.logo) {
      return `url(${environment.API}/uploads/${this.info.logo})`;
    }
  }

  public getPhones() {
    return this.info.phone.split(' ');
  }

  public sendAnchor(value) {
    this.navService.sendAnchorValue(value);
  }
}
