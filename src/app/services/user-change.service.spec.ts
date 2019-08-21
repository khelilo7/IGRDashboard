import { TestBed } from '@angular/core/testing';

import { UserChangeService } from './user-change.service';

describe('UserChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserChangeService = TestBed.get(UserChangeService);
    expect(service).toBeTruthy();
  });
});
