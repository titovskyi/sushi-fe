import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private subject = new Subject<any>();

  constructor() { }

  public sendAnchorValue(anchorId) {
    this.subject.next({anchor: anchorId});
  }

  public getAnchorValue(): Observable<any> {
    return this.subject.asObservable();
  }
}
