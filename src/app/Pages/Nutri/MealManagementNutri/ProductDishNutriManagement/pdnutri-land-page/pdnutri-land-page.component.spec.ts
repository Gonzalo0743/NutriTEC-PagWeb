import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDNutriLandPageComponent } from './pdnutri-land-page.component';

describe('PDNutriLandPageComponent', () => {
  let component: PDNutriLandPageComponent;
  let fixture: ComponentFixture<PDNutriLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDNutriLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PDNutriLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
