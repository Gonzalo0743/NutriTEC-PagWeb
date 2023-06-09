import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDailyConsumptionComponent } from './assign-daily-consumption.component';

describe('AssignDailyConsumptionComponent', () => {
  let component: AssignDailyConsumptionComponent;
  let fixture: ComponentFixture<AssignDailyConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignDailyConsumptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignDailyConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
