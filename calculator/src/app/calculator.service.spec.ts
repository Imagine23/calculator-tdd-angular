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
  })

  it('should return sum of two numbers', ()=> {
    const result = service.add('1,2');
    expect(result).toEqual(3);
  })
});
