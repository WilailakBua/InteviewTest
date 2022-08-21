import { TestBed } from '@angular/core/testing';

import { HeroSericeService } from './hero-serice.service';

describe('HeroSericeService', () => {
  let service: HeroSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
