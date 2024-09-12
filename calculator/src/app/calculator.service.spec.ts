import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should return 0 for empty string', () => {
    const result = service.add('');
    expect(result).toEqual(0);
  });

  it('should return number itself if the input is a single number', ()=> {
    const result = service.add('1');
    expect(result).toEqual(1);
  });

  it('should return sum of two numbers', ()=> {
    const result = service.add('1,2');
    expect(result).toEqual(3);
  });

  it('should return sum of multiple numbers', ()=> {
    const result = service.add('1,2,3,4,5');
    expect(result).toEqual(15);
  });

  it('should handle new lines as delimiters', ()=> {
    const result = service.add('1\n2,5');
    expect(result).toEqual(8);
  });

  it('should throw error if input number is negative', ()=> {
    expect(()=>service.add('1,2,-3,4')).toThrowError('negative number not allowed -3');
  });

  it('should throw error if input numbers is negative and handle correctly', ()=> {
    expect(()=>service.add('1,-2,-3,4,-5')).toThrowError('negative number not allowed -2,-3,-5');
  });

});
