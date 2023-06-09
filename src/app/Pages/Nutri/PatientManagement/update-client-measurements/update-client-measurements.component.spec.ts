import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientMeasurementsComponent } from './update-client-measurements.component';

describe('UpdateClientMeasurementsComponent', () => {
  let component: UpdateClientMeasurementsComponent;
  let fixture: ComponentFixture<UpdateClientMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientMeasurementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClientMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
