import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductsByRecipeComponent } from './get-products-by-recipe.component';

describe('GetProductsByRecipeComponent', () => {
  let component: GetProductsByRecipeComponent;
  let fixture: ComponentFixture<GetProductsByRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProductsByRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProductsByRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
