import { ThemeService } from './shared/services/theme.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stapler';

  //isThemeDark: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    //this.isThemeDark = this.themeService.isThemeDark;
  }
}
