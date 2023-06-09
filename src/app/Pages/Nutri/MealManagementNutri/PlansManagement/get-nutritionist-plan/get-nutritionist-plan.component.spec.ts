import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNutritionistPlanComponent } from './get-nutritionist-plan.component';

describe('GetNutritionistPlanComponent', () => {
  let component: GetNutritionistPlanComponent;
  let fixture: ComponentFixture<GetNutritionistPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNutritionistPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNutritionistPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
