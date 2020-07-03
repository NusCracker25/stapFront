import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

/******************* APP Import ******************************/
import { ThemeService } from '@shared/services/theme.service';
import { AuthService } from '@core/auth.service';
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

  isThemeDark$: Observable<boolean>;

  isDescription$: Observable<boolean>;
  islong: boolean;

  entries = [
    {
      url: '[/home]',
      name: 'Home',
      icon: 'explore'
    },
    {
      url: '/todo',
      name: 'Stap Tasks',
      icon: 'assignment',
    },
    {
      url: '/home',
      name: 'Stap Ship',
      icon: 'anchor',
    },
    {
      url: '/home',
      name: 'Stap Plan',
      icon: 'fact_check',
    },
    {
      url: '/home',
      name: 'Stap Math',
      icon: 'table_view',
    },
    {
      url: '/home',
      name: 'Stap NoCode',
      icon: 'integration_instructions',
    },
    {
      url: '/home',
      name: 'Stap Mind',
      icon: 'view_carousel',
    },
    {
      url: '/home',
      name: 'Stap Mind3D',
      icon: 'language',
    },
    {
      url: '/home',
      name: 'Stap Mail',
      icon: 'all_inbox',
    },
    {
      url: '/home',
      name: 'Stap Admin',
      icon: 'admin_panel_settings',
    }

  ];

  constructor(private breakpointObserver: BreakpointObserver,
              public auth: AuthService,
              private router: Router,
              private theme: ThemeService
              ) {}

ngOnInit(){
  this.auth.logout();

  this.isThemeDark$ = this.theme.isThemeDark;
  this.isDescription$ = this.theme.isLongDescription;

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

  /**
   * modifies the status for description in trailer
   */
   onChangeDescription(){
     console.log(' is long description ',this.isDescription$);
     this.theme.switchDescription();
   }

}
