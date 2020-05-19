import { TestBed } from '@angular/core/testing';

import { CentralMessageService } from './central-message.service';

describe('CentralMessageService', () => {
  let service: CentralMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
