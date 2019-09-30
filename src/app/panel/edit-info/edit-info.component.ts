import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppStateInterface} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {UpdateStoreInfo} from '../../store/actions/store-info.actions';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit, OnDestroy {
  public storeInfoForm: FormGroup;
  public uploadedFile: File;
  public prevLogoPath: string = null;
  public logoPath: any = null;
  public fileName;

  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.storeInfoForm = this.fb.group({
      city: ['', Validators.required],
      delivery_time: ['', Validators.required],
      delivery_info: ['', Validators.required],
      map: ['', Validators.required],
      logo: ['', Validators.required],
      phone: ['', Validators.required]
    });

    // this.store.dispatch(new GetStoreInfo());
    this.sub = this.store.subscribe((res: AppStateInterface) => {
      this.prevLogoPath = res.info.info.logo;
      this.logoPath = this.domSanitizer.bypassSecurityTrustUrl(`${environment.API}${res.info.info.logo}`);
      this.storeInfoForm.patchValue({
        city: res.info.info.city,
        delivery_time: res.info.info.delivery_time,
        delivery_info: res.info.info.delivery_info,
        map: res.info.info.map,
        logo:  this.logoPath,
        phone: res.info.info.phone
      });
    });
  }

  changeInfo() {
    this.storeInfoForm.patchValue({logo: this.fileName});
    const newInfo = {...this.storeInfoForm.value, prev_logo_name: this.prevLogoPath};
    this.store.dispatch(new UpdateStoreInfo(newInfo));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  fileChange(element) {
    this.uploadedFile = element.target.files[0];

    const formData = new FormData();
    formData.append('upload', this.uploadedFile, this.uploadedFile.name);
    this.http.post('http://localhost:3000/api/upload', formData)
      .subscribe((response: any) => {
        this.fileName = response.filePath;
        this.logoPath = this.domSanitizer.bypassSecurityTrustUrl(`${environment.API}${this.fileName}`);
      });
  }
}
