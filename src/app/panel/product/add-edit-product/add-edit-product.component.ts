import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {AppStateInterface} from '../../../store/state/app.state';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {CreateProduct, GetProduct, UpdateProduct} from '../../../store/actions/products.action';
import {environment} from '../../../../environments/environment';
import {GetPosterCategories} from '../../../store/actions/poster.action';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
  public productForm: FormGroup;
  public imagePath: any;
  public productId: string;
  public uploadFile: File;
  public poster_categories: any[];
  public main_categories: any[];
  public sub_categories: any[];
  public productInfo: any = {category: ''};
  public category_value: string;
  public sub_category_value: string;

  private fileName: string;
  private prevImage: any;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private domSanitizer: DomSanitizer,
    private store: Store<AppStateInterface>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      category: ['', Validators.required],
      sub_category: [''],
      product_image: [''],
      price: ['', Validators.required],
      consist: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.store.dispatch(new GetPosterCategories());
    this.store.subscribe((res) => {
      this.poster_categories = res.poster.posterCategories;
      this.main_categories = res.poster.posterCategories.filter((item) => item.parent_category === '0');
    });

    if (this.productId) {
      this.store.dispatch(new GetProduct(Number(this.productId)));
      this.sub = this.store.subscribe((res) => {
        if (res.products.currentProduct.id) {
          this.productInfo = res.products.currentProduct;
          this.prevImage = this.productInfo.product_image;
          this.category_value = this.productInfo.category;
          this.sub_category_value = this.productInfo.sub_category;

          this.getSubCategories(this.productInfo.category);

          this.productForm = this.fb.group({
            id: [this.productInfo.id],
            name: [this.productInfo.name, Validators.required],
            category: [this.productInfo.category, Validators.required],
            sub_category: [this.productInfo.sub_category],
            product_image: [this.productInfo.product_image],
            price: [this.productInfo.price, Validators.required],
            consist: [this.productInfo.consist, Validators.required]
          });

          this.imagePath = this.getSafeUrl(this.productInfo.product_image);
        }
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  fileChange(element) {
    this.uploadFile = element.target.files[0];

    const formData = new FormData();
    formData.append('upload', this.uploadFile, this.uploadFile.name);
    this.http.post('http://localhost:3000/api/upload', formData)
      .subscribe((res: any) => {
        this.fileName = res.filePath;
        this.imagePath = this.getSafeUrl(this.fileName);
      });
  }

  submitForm() {
    this.productForm.patchValue({product_image: this.fileName, category: this.category_value, sub_category: this.sub_category_value});

    if (this.productId) {
      const newProductInfo = {...this.productForm.value, prev_image: this.prevImage};
      this.store.dispatch(new UpdateProduct(newProductInfo));
    } else {
      this.store.dispatch(new CreateProduct(this.productForm.value));
    }

    this.router.navigateByUrl('/panel/products');
  }

  getSafeUrl(imageName) {
    return this.domSanitizer.bypassSecurityTrustUrl(`${environment.API}${imageName}`);
  }

  getSubCategories(category_value) {
    const currentCategory = this.poster_categories.find((item) => {
      return item.category_name === category_value;
    });
    console.log(this.poster_categories);
    if (currentCategory) {
      this.sub_categories = this.poster_categories.filter((item) => item.parent_category === currentCategory.category_id);
    }
  }

}
