import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../../_services/navigation.service';
import {Subscription} from 'rxjs';
import {Store} from "@ngrx/store";
import {AppStateInterface} from "../../store/state/app.state";
import {GetProducts} from "../../store/actions/products.action";
import {Product} from "../../_models/product";
import {environment} from '../../../environments/environment';
import {log} from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  public products: Product[] = null;
  public sushi: Product[] = null;
  public rolls: Product[] = null;
  public sets: Product[] = null;
  public drinks: Product[] = null;
  public spices: Product[] = null;

  private fragment: string;
  private sub: Subscription;

  // @ts-ignore
  @ViewChild('sushi') sushiAnchor: ElementRef;
  // @ts-ignore
  @ViewChild('rolls') rollsAnchor: ElementRef;
  // @ts-ignore
  @ViewChild('sets') setsAnchor: ElementRef;

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
          case this.setsAnchor.nativeElement.id:
            document.querySelector('#' + this.setsAnchor.nativeElement.id).scrollIntoView();
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
        if (item && item.product_image) {
          item.product_image = `${environment.API}/uploads/${item.product_image}`;
        }
      });
      this.sushi = this.products.filter((item) => item.category === 'Суши');
      this.rolls = this.products.filter((item) => item.category === 'Роллы');
      this.sets = this.products.filter((item) => item.category === 'Сеты');
      this.drinks = this.products.filter((item) => item.category === 'Напитки');
      this.spices = this.products.filter((item) => item.category === 'Специи');

      const subSushi = [...new Set(this.sushi.map(item => item.sub_category))];
      const subRolls = [...new Set(this.rolls.map(item => item.sub_category))];
      const subSets = [...new Set(this.sets.map(item => item.sub_category))];
      const subDrinks = [...new Set(this.drinks.map(item => item.sub_category))];
      const subSpices = [...new Set(this.spices.map(item => item.sub_category))];

      console.log(this.products);
      console.log(this.sushi);
      console.log(this.rolls);
      console.log(subRolls);
      console.log(subSushi);
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
