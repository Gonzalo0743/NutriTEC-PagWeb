import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatingPlanComponent } from './eating-plan.component';

describe('EatingPlanComponent', () => {
  let component: EatingPlanComponent;
  let fixture: ComponentFixture<EatingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatingPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EatingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
