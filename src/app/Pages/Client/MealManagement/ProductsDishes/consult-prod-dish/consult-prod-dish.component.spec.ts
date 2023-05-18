import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultProdDishComponent } from './consult-prod-dish.component';

describe('ConsultProdDishComponent', () => {
  let component: ConsultProdDishComponent;
  let fixture: ComponentFixture<ConsultProdDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultProdDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultProdDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
