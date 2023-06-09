import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManagementLandPageComponent } from './patient-management-land-page.component';

describe('PatientManagementLandPageComponent', () => {
  let component: PatientManagementLandPageComponent;
  let fixture: ComponentFixture<PatientManagementLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientManagementLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientManagementLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
