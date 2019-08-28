import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/state/app.state';
import {Subscription} from 'rxjs';
import {GetAllNews} from '../../store/actions/store-news.action';
import {StoreNews} from '../../_models/storeNews';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  public storeNews: StoreNews[] = [];

  private sub: Subscription;

  constructor(
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetAllNews());
    this.sub = this.store.subscribe((res) => {
      this.storeNews = res.storeNews.storeNews;
      console.log(this.storeNews, 'StoreNews');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
