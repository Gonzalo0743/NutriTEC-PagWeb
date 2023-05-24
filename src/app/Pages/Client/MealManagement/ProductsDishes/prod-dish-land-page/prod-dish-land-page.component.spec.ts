import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDishLandPageComponent } from './prod-dish-land-page.component';

describe('ProdDishLandPageComponent', () => {
  let component: ProdDishLandPageComponent;
  let fixture: ComponentFixture<ProdDishLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDishLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdDishLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
