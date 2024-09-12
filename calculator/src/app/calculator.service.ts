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

    const numberArr = numbers.split(',').map(num=> parseInt(num,10));
    return numberArr.reduce((sum, current) => sum + current, 0);
  }
}
