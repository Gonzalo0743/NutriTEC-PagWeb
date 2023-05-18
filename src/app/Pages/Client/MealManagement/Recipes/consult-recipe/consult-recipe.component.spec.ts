import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultRecipeComponent } from './consult-recipe.component';

describe('ConsultRecipeComponent', () => {
  let component: ConsultRecipeComponent;
  let fixture: ComponentFixture<ConsultRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
