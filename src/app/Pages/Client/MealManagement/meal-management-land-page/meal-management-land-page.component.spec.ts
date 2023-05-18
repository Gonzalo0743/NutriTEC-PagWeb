import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealManagementLandPageComponent } from './meal-management-land-page.component';

describe('MealManagementLandPageComponent', () => {
  let component: MealManagementLandPageComponent;
  let fixture: ComponentFixture<MealManagementLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealManagementLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealManagementLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
