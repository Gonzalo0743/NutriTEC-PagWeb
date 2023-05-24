import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesLandPageComponent } from './recipes-land-page.component';

describe('RecipesLandPageComponent', () => {
  let component: RecipesLandPageComponent;
  let fixture: ComponentFixture<RecipesLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
