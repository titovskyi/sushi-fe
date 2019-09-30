import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/state/app.state';
import {RemoveError} from '../../store/actions/error.actions';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.scss']
})
export class ErrorPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ErrorPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
  }

  onNoClick() {
    this.store.dispatch(new RemoveError());
    this.dialogRef.close();
  }

}
