import {Component, OnInit} from '@angular/core';
import {GetStoreInfo} from './store/actions/store-info.actions';
import {Store} from '@ngrx/store';
import {AppStateInterface} from './store/state/app.state';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ErrorPopupComponent} from './components/error-popup/error-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<AppStateInterface>,
    public router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetStoreInfo());

    this.store.subscribe((res) => {
      this.dialog.closeAll();
      if (res.error.error) {
        this.dialog.open(ErrorPopupComponent, {
          width: '80%',
          data: res.error.error
        });
      }
    });
  }
}
