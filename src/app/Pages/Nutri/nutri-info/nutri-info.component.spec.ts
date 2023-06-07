import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriInfoComponent } from './nutri-info.component';

describe('NutriInfoComponent', () => {
  let component: NutriInfoComponent;
  let fixture: ComponentFixture<NutriInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutriInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutriInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
