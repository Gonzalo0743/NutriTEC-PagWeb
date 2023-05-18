import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyConsumptionRegisterComponent } from './daily-consumption-register.component';

describe('DailyConsumptionRegisterComponent', () => {
  let component: DailyConsumptionRegisterComponent;
  let fixture: ComponentFixture<DailyConsumptionRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyConsumptionRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyConsumptionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
