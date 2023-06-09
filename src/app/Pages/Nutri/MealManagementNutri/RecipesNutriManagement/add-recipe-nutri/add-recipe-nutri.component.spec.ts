import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeNutriComponent } from './add-recipe-nutri.component';

describe('AddRecipeNutriComponent', () => {
  let component: AddRecipeNutriComponent;
  let fixture: ComponentFixture<AddRecipeNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipeNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecipeNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
