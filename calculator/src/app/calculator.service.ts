import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  add(numbers:string) {
    if (!numbers){
      return 0;
    }
    return parseInt(numbers, 10);
  }
}
