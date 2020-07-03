import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

private themeDark: Subject<boolean> = new Subject<boolean>();
isThemeDark = this.themeDark.asObservable();

private longDescription: BehaviorSubject <boolean> = new BehaviorSubject<boolean>(true);
isLongDescription = this.longDescription.asObservable();

  constructor() { }

  setTheme(theme: boolean){
    this.themeDark.next(theme);
  }

  setLongDescription(description: boolean){
    this.longDescription.next(description);
  }

  switchDescription(){
    console.log('change description ', this.isLongDescription);

    if (this.longDescription.getValue()){
      console.log(' to false');
      this.longDescription.next(false);
    } else {
      console.log(' to true');
      this.longDescription.next(true);
    }
  }
}
