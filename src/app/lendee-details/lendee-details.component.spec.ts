import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendeeDetailsComponent } from './lendee-details.component';
import { LendeeDetailsService } from '../shared/lendee-details.service';
import { LendeeDetails } from 'src/app/shared/lendee-details.model';

describe('LendeeDetailsComponent', () => {
  let component: LendeeDetailsComponent;
  let fixture: ComponentFixture<LendeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendeeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should use the refresh list from the service", () => {
    const lendeeService = fixture.debugElement.injector.get(LendeeDetailsService);
    fixture.detectChanges();
    expect(lendeeService.refreshList()).toEqual(component.service.refreshList());
  });

  it("should create a new post", () => {
    component.service.postlendeesDetail();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain(LendeeDetails);
  });

});
