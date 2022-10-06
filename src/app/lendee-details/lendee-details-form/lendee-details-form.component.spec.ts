import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendeeDetailsFormComponent } from './lendee-details-form.component';

describe('LendeeDetailsFormComponent', () => {
  let component: LendeeDetailsFormComponent;
  let fixture: ComponentFixture<LendeeDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendeeDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendeeDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
