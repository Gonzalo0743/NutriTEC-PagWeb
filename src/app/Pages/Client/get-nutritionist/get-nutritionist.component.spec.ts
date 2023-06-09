import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNutritionistComponent } from './get-nutritionist.component';

describe('GetNutritionistComponent', () => {
  let component: GetNutritionistComponent;
  let fixture: ComponentFixture<GetNutritionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNutritionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
