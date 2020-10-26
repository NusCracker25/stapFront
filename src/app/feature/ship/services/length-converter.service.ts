import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LengthConverterService {

  constructor() { }

  toUSI_post1668(target: string, toise: number, feet: number, thumb: number, ligne: number , point: number): number{
    let result: number;
    result = 0.0;
    result += point * 0.188;
    result += ligne * 2.256;
    result += thumb * 27.07;
    result += feet * 324.84;
    result += toise * 1949;
    switch (target) {
      case 'mm':
        result *= 1;
        break;
      case 'cm':
        result *= 0.1;
        break;
      case 'dm':
        result *= 0.01;
        break;
      case 'm':
        result *= 0.001;
        break;
    }
    return result;
  }


}
