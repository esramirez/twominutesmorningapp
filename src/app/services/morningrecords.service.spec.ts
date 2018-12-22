import { TestBed } from '@angular/core/testing';

import { MorningrecordsService } from './morningrecords.service';

describe('MorningrecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MorningrecordsService = TestBed.get(MorningrecordsService);
    expect(service).toBeTruthy();
  });
});
