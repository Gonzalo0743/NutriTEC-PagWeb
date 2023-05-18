import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPlanComponent } from './consult-plan.component';

describe('ConsultPlanComponent', () => {
  let component: ConsultPlanComponent;
  let fixture: ComponentFixture<ConsultPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
