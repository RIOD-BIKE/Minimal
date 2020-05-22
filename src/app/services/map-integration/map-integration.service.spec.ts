import { TestBed } from '@angular/core/testing';

import { MapIntegrationService } from './map-integration.service';

describe('MapIntegrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapIntegrationService = TestBed.get(MapIntegrationService);
    expect(service).toBeTruthy();
  });
});
