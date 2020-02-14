import { TestBed } from '@angular/core/testing';

import { CurrentStateService } from './current-state.service';

describe('CurrentStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentStateService = TestBed.get(CurrentStateService);
    expect(service).toBeTruthy();
  });
});
