import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-cart-error-popup',
  templateUrl: './cart-error-popup.component.html',
  styleUrls: ['./cart-error-popup.component.scss']
})
export class CartErrorPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<CartErrorPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onOkClick() {
    this.dialogRef.close();
  }

}
