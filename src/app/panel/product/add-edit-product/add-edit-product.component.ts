import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {AppStateInterface} from '../../../store/state/app.state';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {CreateProduct, GetProduct, UpdateProduct} from '../../../store/actions/products.action';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
  public productForm: FormGroup;
  public imagePath: any;
  public uploadFile: File;


  private fileName: string;
  private productId: string;
  private prevImage: any;

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
      sub_category: ['', Validators.required],
      product_image: [''],
      price: ['', Validators.required],
      consist: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.productId) {
      this.store.dispatch(new GetProduct(Number(this.productId)));
      this.store.subscribe((res) => {
        if (res.products.currentProduct.id) {
          const productInfo = res.products.currentProduct;
          this.prevImage = productInfo.product_image;

          this.productForm = this.fb.group({
            id: [productInfo.id],
            name: [productInfo.name, Validators.required],
            category: [productInfo.category, Validators.required],
            sub_category: [productInfo.sub_category, Validators.required],
            product_image: [productInfo.product_image],
            price: [productInfo.price, Validators.required],
            consist: [productInfo.consist, Validators.required]
          });

          this.imagePath = this.getSafeUrl(productInfo.product_image);
        }
      });
    }
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
    this.productForm.patchValue({product_image: this.fileName});

    if (this.productId) {
      const newProductInfo = {...this.productForm.value, prev_image: this.prevImage};
      this.store.dispatch(new UpdateProduct(newProductInfo));
    } else {
      this.store.dispatch(new CreateProduct(this.productForm.value));
    }
    this.router.navigateByUrl('/panel/products');
  }

  getSafeUrl(imageName) {
    return this.domSanitizer.bypassSecurityTrustUrl(`${environment.API}/uploads/${imageName}`);
  }

}
