import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealManagementNutriLandPageComponent } from './meal-management-nutri-land-page.component';

describe('MealManagementNutriLandPageComponent', () => {
  let component: MealManagementNutriLandPageComponent;
  let fixture: ComponentFixture<MealManagementNutriLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealManagementNutriLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealManagementNutriLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
