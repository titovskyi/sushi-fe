import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../../_services/navigation.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/state/app.state';
import {GetProducts} from '../../store/actions/products.action';
import {Product} from '../../_models/product';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  public products: Product[] = [];

  public sushiProd: Product[] = [];
  public rollsProd: Product[] = [];
  public setsProd: Product[] = [];
  public drinksProd: Product[] = [];
  public spicesProd: Product[] = [];

  private fragment: string;
  private sub: Subscription;

  // @ts-ignore
  @ViewChild('sushi') sushiAnchor: ElementRef;
  // @ts-ignore
  @ViewChild('rolls') rollsAnchor: ElementRef;
  // @ts-ignore
  @ViewChild('sets') setsAnchor: ElementRef;
  // @ts-ignore
  @ViewChild('drinks') drinksAnchor: ElementRef;
  // @ts-ignore
  @ViewChild('spices') spicesAnchor: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private navService: NavigationService,
    private store: Store<AppStateInterface>
  ) {
    this.sub = this.navService.getAnchorValue().subscribe((value) => {
      if (value) {
        switch (value.anchor) {
          case this.sushiAnchor.nativeElement.id:
            document.querySelector('#' + this.sushiAnchor.nativeElement.id).scrollIntoView();
            break;
          case this.rollsAnchor.nativeElement.id:
            document.querySelector('#' + this.rollsAnchor.nativeElement.id).scrollIntoView();
            break;
          case this.drinksAnchor.nativeElement.id:
            document.querySelector('#' + this.drinksAnchor.nativeElement.id).scrollIntoView();
            break;
          case this.setsAnchor.nativeElement.id:
            document.querySelector('#' + this.setsAnchor.nativeElement.id).scrollIntoView();
            break;
          case this.spicesAnchor.nativeElement.id:
            document.querySelector('#' + this.spicesAnchor.nativeElement.id).scrollIntoView();
            break;

          default:
            return;
        }
      }
    });

    this.store.dispatch(new GetProducts());
    this.store.subscribe((res) => {
      this.products = res.products.products;
      this.products.forEach((item) => {
        if (item && item.product_image && item.product_image.indexOf('http') === -1) {
          item.product_image = `${environment.API}/uploads/${item.product_image}`;
        }
      });

      this.sushiProd = this.products.filter((item) => item.category === 'Суши');
      this.rollsProd = this.products.filter((item) => item.category === 'Роллы');
      this.setsProd = this.products.filter((item) => item.category === 'Сеты');
      this.drinksProd = this.products.filter((item) => item.category === 'Напитки');
      this.spicesProd = this.products.filter((item) => item.category === 'Специи');

    });
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
