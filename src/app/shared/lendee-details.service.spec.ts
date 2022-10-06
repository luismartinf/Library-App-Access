import { TestBed } from '@angular/core/testing';

import { LendeeDetailsService } from './lendee-details.service';
import { LendeeDetails } from './lendee-details.model';

describe('LendeeDetailsService', () => {
  let service: LendeeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LendeeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should create a post", () => {
    let initlenght = service.refreshList.length;
    service.postlendeesDetail();
    expect(service.refreshList.length).toBeGreaterThan(initlenght);
  });

  it("should remove a created post from the array of posts", () => {
    let initlenght = service.refreshList.length;
    service.postlendeesDetail();
    service.deletelendeesDetail(initlenght + 1);
    expect(service.refreshList.length).toBeLessThanOrEqual(initlenght);
  });
});
