import { TestBed } from '@angular/core/testing';

import { SideNavService } from './side-nav.service';

xdescribe('SideNavService', () => {
  let service: SideNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
