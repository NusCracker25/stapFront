import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
private themeDark: Subject<boolean> = new Subject<boolean>();
isThemeDark = this.themeDark.asObservable();
  constructor() { }

  setTheme(theme: boolean){
    this.themeDark.next(theme);
  }
}
