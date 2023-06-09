import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecipeNutriComponent } from './delete-recipe-nutri.component';

describe('DeleteRecipeNutriComponent', () => {
  let component: DeleteRecipeNutriComponent;
  let fixture: ComponentFixture<DeleteRecipeNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRecipeNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRecipeNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
