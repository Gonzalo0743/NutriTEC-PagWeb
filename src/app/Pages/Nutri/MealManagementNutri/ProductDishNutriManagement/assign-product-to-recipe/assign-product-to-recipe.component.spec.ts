import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProductToRecipeComponent } from './assign-product-to-recipe.component';

describe('AssignProductToRecipeComponent', () => {
  let component: AssignProductToRecipeComponent;
  let fixture: ComponentFixture<AssignProductToRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignProductToRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignProductToRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
