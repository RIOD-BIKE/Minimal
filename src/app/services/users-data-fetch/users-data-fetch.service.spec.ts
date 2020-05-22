import { TestBed } from '@angular/core/testing';

import { UsersDataFetchService } from './users-data-fetch.service';

describe('UsersDataFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersDataFetchService = TestBed.get(UsersDataFetchService);
    expect(service).toBeTruthy();
  });
});
