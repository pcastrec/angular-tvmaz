import { TestBed } from '@angular/core/testing';
import { AllowAdult } from './allow-adult';

describe('AllowAdult', () => {
  let service: AllowAdult;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowAdult);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
