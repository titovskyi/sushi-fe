import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StoreNews} from '../../../_models/storeNews';

@Component({
  selector: 'app-news-popup',
  templateUrl: './news-popup.component.html',
  styleUrls: ['./news-popup.component.scss']
})
export class NewsPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StoreNews
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

}
