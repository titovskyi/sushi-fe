import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {StoreNews} from '../../../_models/storeNews';
import {AppStateInterface} from '../../../store/state/app.state';
import {GetAllNews, RemoveNews} from '../../../store/actions/store-news.action';
import {environment} from '../../../../environments/environment';
import {DomSanitizer} from '@angular/platform-browser';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './list-news.html',
  styleUrls: ['./list-news.scss']
})
export class ListNewsComponent implements OnInit {
  public news: StoreNews[];

  private sub: Subscription;

  constructor(
    private store: Store<AppStateInterface>,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetAllNews());
    this.sub = this.store.subscribe((res) => {
      this.news = res.storeNews.storeNews;
    });
  }

  getSafeUrl(imageName) {
    return this.domSanitizer.bypassSecurityTrustUrl(`${environment.API}/uploads/${imageName}`);
  }

  removeNews(newsId: number) {
    this.store.dispatch(new RemoveNews(newsId));
  }
}
