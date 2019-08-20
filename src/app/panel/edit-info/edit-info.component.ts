import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppStateInterface} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {GetStoreInfo, UpdateStoreInfo} from '../../store/actions/store-info.actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit, OnDestroy {
  public storeInfoForm: FormGroup;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.storeInfoForm = this.fb.group({
      city: [''],
      delivery_time: [''],
      delivery_info: [''],
      map: [''],
      logo: [''],
      phone: ['']
    });

    this.store.dispatch(new GetStoreInfo());
    this.sub = this.store.subscribe((res: AppStateInterface) => {
      console.log(res);
      this.storeInfoForm.patchValue({
        city: res.info.info.city,
        delivery_time: res.info.info.delivery_time,
        delivery_info: res.info.info.delivery_info,
        map: res.info.info.map,
        logo: res.info.info.logo,
        phone: res.info.info.phone
      });
    });
  }

  changeInfo() {
    this.store.dispatch(new UpdateStoreInfo(this.storeInfoForm.value));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
