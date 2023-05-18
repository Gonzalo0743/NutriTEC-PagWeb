import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTrackingComponent } from './patient-tracking.component';

describe('PatientTrackingComponent', () => {
  let component: PatientTrackingComponent;
  let fixture: ComponentFixture<PatientTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
