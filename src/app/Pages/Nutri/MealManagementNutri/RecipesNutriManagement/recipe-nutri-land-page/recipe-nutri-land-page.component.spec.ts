import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNutriLandPageComponent } from './recipe-nutri-land-page.component';

describe('RecipeNutriLandPageComponent', () => {
  let component: RecipeNutriLandPageComponent;
  let fixture: ComponentFixture<RecipeNutriLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeNutriLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeNutriLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
