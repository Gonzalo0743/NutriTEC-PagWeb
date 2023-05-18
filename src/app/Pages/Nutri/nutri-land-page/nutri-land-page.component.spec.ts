import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriLandPageComponent } from './nutri-land-page.component';

describe('NutriLandPageComponent', () => {
  let component: NutriLandPageComponent;
  let fixture: ComponentFixture<NutriLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutriLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutriLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
