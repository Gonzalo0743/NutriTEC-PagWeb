import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRecipeNutriComponent } from './get-recipe-nutri.component';

describe('GetRecipeNutriComponent', () => {
  let component: GetRecipeNutriComponent;
  let fixture: ComponentFixture<GetRecipeNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRecipeNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRecipeNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
