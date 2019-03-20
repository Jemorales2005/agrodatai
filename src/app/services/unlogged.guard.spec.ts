import { TestBed, async, inject } from '@angular/core/testing';

import { UnloggedGuard } from './unlogged.guard';

describe('UnloggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnloggedGuard]
    });
  });

  it('should ...', inject([UnloggedGuard], (guard: UnloggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
