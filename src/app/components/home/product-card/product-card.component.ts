import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Product} from "../../../_models/product";
import {ProductPopupComponent} from "../product-popup/product-popup.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  showNewsPopup() {
    const dialogRef = this.dialog.open(ProductPopupComponent, {
      width: '80%',
      data: this.product
    });
  }

}
