import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../../_services/navigation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
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
    private navService: NavigationService
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
  }

  ngOnInit() {
    console.log(this.sushiAnchor, 'sushiAnchor');
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
