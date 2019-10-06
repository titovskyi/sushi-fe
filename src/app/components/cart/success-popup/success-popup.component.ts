import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../../store/state/app.state';
import {RemoveOrderedProducts} from '../../../store/actions/products.action';

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.scss']
})
export class SuccessPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SuccessPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(result => {
      this.store.dispatch(new RemoveOrderedProducts());
    });
  }

  onOkClick() {
    this.store.dispatch(new RemoveOrderedProducts());
    this.dialogRef.close();
  }

}
