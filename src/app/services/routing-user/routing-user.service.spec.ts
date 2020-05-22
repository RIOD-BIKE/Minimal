import { TestBed } from '@angular/core/testing';

import { RoutingUserService } from './routing-user.service';

describe('RoutingUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutingUserService = TestBed.get(RoutingUserService);
    expect(service).toBeTruthy();
  });
});
