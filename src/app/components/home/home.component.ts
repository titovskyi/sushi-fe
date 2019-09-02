import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../../_services/navigation.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStateInterface} from '../../store/state/app.state';
import {GetProducts} from '../../store/actions/products.action';
import {Product} from '../../_models/product';
import {environment} from '../../../environments/environment';
import {log} from 'util';

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

  public subSushi: string[];
  public subRolls: string[];
  public subSets: string[];
  public subDrinks: string[];
  public subSpices: string[];

  public sushiFilter: string;
  public rollsFilter: string;
  public setsFilter: string;
  public drinksFilter: string;
  public spicesFilter: string;

  public showSushi = false;
  public showRolls = false;
  public showSets = false;
  public showDrinks = false;
  public showSpices = false;

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

      this.subSushi = [...new Set(this.sushiProd.map(item => item.sub_category))];
      this.subRolls = [...new Set(this.rollsProd.map(item => item.sub_category))];
      this.subSets = [...new Set(this.setsProd.map(item => item.sub_category))];
      this.subDrinks = [...new Set(this.drinksProd.map(item => item.sub_category))];
      this.subSpices = [...new Set(this.spicesProd.map(item => item.sub_category))];
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

  filterSushi(event) {
    if (event !== 'Все') {
      this.sushiProd = this.products.filter((item) => item.sub_category === event);
    } else {
      this.sushiProd = this.products.filter((item) => item.category === 'Суши');
    }
  }
  filterRolls(event) {
    if (event !== 'Все') {
      this.rollsProd = this.products.filter((item) => item.sub_category === event);
    } else {
      this.rollsProd = this.products.filter((item) => item.category === 'Роллы');
    }
  }
  filterSets(event) {
    if (event !== 'Все') {
      this.setsProd = this.products.filter((item) => item.sub_category === event);
    } else {
      this.setsProd = this.products.filter((item) => item.category === 'Сеты');
    }
  }
  filterDrinks(event) {
    if (event !== 'Все') {
      this.drinksProd = this.products.filter((item) => item.sub_category === event);
    } else {
      this.drinksProd = this.products.filter((item) => item.category === 'Напитки');
    }
  }
  filterSpices(event) {
    if (event !== 'Все') {
      this.spicesProd = this.products.filter((item) => item.sub_category === event);
    } else {
      this.spicesProd = this.products.filter((item) => item.category === 'Специи');
    }
  }

  showHide(prodGroup) {
    switch (prodGroup) {
      case 'sushi': {
        this.showSushi = !this.showSushi;
        break;
      }
      case 'rolls': {
        this.showRolls = !this.showRolls;
        break;
      }
      case 'sets': {
        this.showSets = !this.showSets;
        break;
      }
      case 'drinks': {
        this.showDrinks = !this.showDrinks;
        break;
      }
      case 'spices': {
        this.showSpices = !this.showSpices;
        break;
      }

      default: {
        return;
      }
    }
  }
}
