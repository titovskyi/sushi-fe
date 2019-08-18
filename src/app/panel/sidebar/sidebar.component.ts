import { Component, OnInit } from '@angular/core';
import {PanelStateInterface} from '../store/state/panel.state';
import {select, Store} from '@ngrx/store';
import {getAdminUser} from '../../store/selectors/admin-user.selectors';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public userRole: string = null;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userRole = this.authService.getRole();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
