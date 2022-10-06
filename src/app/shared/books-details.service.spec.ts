import { BooksDetailsService } from './books-details.service';
import { HttpClient } from "@angular/common/http";
import { BooksDetail } from './books-detail.model';
import { TestBed } from '@angular/core/testing';


describe('LendeeDetailsService', () => {
  let service: BooksDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should create a post", () => {
    let initlenght = service.refreshList.length;
    service.postbooksDetail();
    expect(service.refreshList.length).toBeGreaterThan(initlenght);
  });

  it("should remove a created post from the array of posts", () => {
    let initlenght = service.refreshList.length;
    service.postbooksDetail();
    service.deletebooksDetail(initlenght + 1);
    expect(service.refreshList.length).toBeLessThanOrEqual(initlenght);
  });
});
