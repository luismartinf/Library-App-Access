import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksDetailsComponent } from './books-details.component';
import { BooksDetailsService } from '../shared/books-details.service';
import { BooksDetail } from '../shared/books-detail.model';



describe('BookDetailsComponent', () => {
  let component: BooksDetailsComponent;
  let fixture: ComponentFixture<BooksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should use the refresh list from the service", () => {
    const BookService = fixture.debugElement.injector.get(BooksDetailsService);
    fixture.detectChanges();
    expect(BookService.refreshList()).toEqual(component.service.refreshList());
  });

  it("should create a new post", () => {
    component.service.postbooksDetail();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain(BooksDetail);
  });

});