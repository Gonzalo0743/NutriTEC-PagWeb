import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeNutriComponent } from './edit-recipe-nutri.component';

describe('EditRecipeNutriComponent', () => {
  let component: EditRecipeNutriComponent;
  let fixture: ComponentFixture<EditRecipeNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecipeNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRecipeNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
