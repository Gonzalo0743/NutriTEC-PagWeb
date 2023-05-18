import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPDNutriComponent } from './consult-pdnutri.component';

describe('ConsultPDNutriComponent', () => {
  let component: ConsultPDNutriComponent;
  let fixture: ComponentFixture<ConsultPDNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultPDNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultPDNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
