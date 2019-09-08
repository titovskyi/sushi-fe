import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../_models/product';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  private _productByCategory: Product[];

  @Input()
  set productByCategory(products: Product[]) {
    this._productByCategory = products;
  }

  get productByCategory(): Product[] {
    return this._productByCategory;
  }

  public filterValue = 'Все';
  public showAll = false;
  public filteredProducts: Product[];
  public filterValues: string[];

  constructor() { }

  ngOnInit() {
    this.filterValues = [...new Set(this.productByCategory.map(item => item.sub_category))];
    this.filterProducts(this.filterValue);
  }

  filterProducts(event) {
    if (event !== 'Все') {
      this.filteredProducts = this.productByCategory.filter((item) => item.sub_category === event);
    } else {
      this.filteredProducts = this.productByCategory;
    }
  }

  showHide() {
    this.showAll = !this.showAll;
  }

}
