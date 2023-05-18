import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLandPageComponent } from './register-land-page.component';

describe('RegisterLandPageComponent', () => {
  let component: RegisterLandPageComponent;
  let fixture: ComponentFixture<RegisterLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
