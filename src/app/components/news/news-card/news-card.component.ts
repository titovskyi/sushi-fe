import {Component, Input, OnInit} from '@angular/core';
import {StoreNews} from '../../../_models/storeNews';
import {NewsPopupComponent} from '../news-popup/news-popup.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() oneNews: StoreNews;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  showNewsPopup() {
    const dialogRef = this.dialog.open(NewsPopupComponent, {
      width: '80%',
      data: this.oneNews
    });
  }

}
