import { TestBed } from '@angular/core/testing';

import { SplitingToGroupsService } from './spliting-to-groups.service';

describe('SplitingToGroupsService', () => {
  let service: SplitingToGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplitingToGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
