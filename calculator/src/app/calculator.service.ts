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

    const negativeNumbers: number[] = [];
    const numberArr = numbers.split(/,|\n/).map(num=> parseInt(num,10));
    const sumAll = numberArr.reduce((sum, current) => 
      {
        if(current < 0){
          negativeNumbers.push();
        }
       return sum + current
      }, 0);

      if(negativeNumbers.length > 0){
        throw new Error(`negative number not allowed ${negativeNumbers[0]}`);
      }

    return sumAll;
  }
}
