import { TestBed } from '@angular/core/testing';

import { NavbarServiceService } from './navbar-service.service';

describe('NavbarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarServiceService = TestBed.get(NavbarServiceService);
    expect(service).toBeTruthy();
  });
});
