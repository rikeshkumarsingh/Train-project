import { TestBed } from '@angular/core/testing';

import { SessionKeepAliveService } from './session-keep-alive.service';

describe('SessionKeepAliveService', () => {
  let service: SessionKeepAliveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionKeepAliveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
