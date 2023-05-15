import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNutriComponent } from './register-nutri.component';

describe('RegisterNutriComponent', () => {
  let component: RegisterNutriComponent;
  let fixture: ComponentFixture<RegisterNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
