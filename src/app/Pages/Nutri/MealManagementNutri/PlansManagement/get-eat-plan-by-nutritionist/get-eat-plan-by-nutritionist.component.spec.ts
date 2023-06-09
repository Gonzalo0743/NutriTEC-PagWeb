import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEatPlanByNutritionistComponent } from './get-eat-plan-by-nutritionist.component';

describe('GetEatPlanByNutritionistComponent', () => {
  let component: GetEatPlanByNutritionistComponent;
  let fixture: ComponentFixture<GetEatPlanByNutritionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEatPlanByNutritionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEatPlanByNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
