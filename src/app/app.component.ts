import {Component, OnInit} from '@angular/core';
import {GetStoreInfo} from './store/actions/store-info.actions';
import {Store} from '@ngrx/store';
import {AppStateInterface} from './store/state/app.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sushi-fe';

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetStoreInfo());
  }
}
