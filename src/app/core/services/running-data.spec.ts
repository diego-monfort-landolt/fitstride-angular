import { TestBed } from '@angular/core/testing';

import { RunningData } from './running-data';

describe('RunningData', () => {
  let service: RunningData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunningData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
