import {Component, Input, OnInit} from '@angular/core';
import {StoreNews} from '../../../_models/storeNews';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() oneNews: StoreNews;

  constructor() { }

  ngOnInit() {
    console.log(this.oneNews, 'CARD Component')
  }

}
