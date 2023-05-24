import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansLandPageComponent } from './plans-land-page.component';

describe('PlansLandPageComponent', () => {
  let component: PlansLandPageComponent;
  let fixture: ComponentFixture<PlansLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
