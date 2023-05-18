import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuresRegisterComponent } from './measures-register.component';

describe('MeasuresRegisterComponent', () => {
  let component: MeasuresRegisterComponent;
  let fixture: ComponentFixture<MeasuresRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuresRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasuresRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
