import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNutritionistComponent } from './header-nutritionist.component';

describe('HeaderNutritionistComponent', () => {
  let component: HeaderNutritionistComponent;
  let fixture: ComponentFixture<HeaderNutritionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNutritionistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
