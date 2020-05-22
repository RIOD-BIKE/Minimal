import { TestBed } from '@angular/core/testing';

import { MapDataFetchService } from './map-data-fetch.service';

describe('MapDataFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapDataFetchService = TestBed.get(MapDataFetchService);
    expect(service).toBeTruthy();
  });
});
