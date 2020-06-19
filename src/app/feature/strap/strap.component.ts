import { ThemeService } from './../../shared/services/theme.service';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'stap-strap',
  templateUrl: './strap.component.html',
  styleUrls: ['./strap.component.css']
})
export class StrapComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isThemeDark: Observable<boolean>;


  constructor(private breakpointObserver: BreakpointObserver,
              public auth: AuthService,
              private router: Router,
              private theme: ThemeService
              ) {}

ngOnInit(){
  this.auth.logout();
  this.isThemeDark = this.theme.isThemeDark;
}

  /* isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  } */
  onLogoutClick() {

    this.auth.logout();
    this.router.navigate(['/home']);
  }

  /**
   * dynamically changes the theme for the application
   */
  onChangeTheme(checked: boolean){
    this.theme.setTheme(checked);
  }

}
