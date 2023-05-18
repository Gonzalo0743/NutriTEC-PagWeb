import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdDishComponent } from './add-prod-dish.component';

describe('AddProdDishComponent', () => {
  let component: AddProdDishComponent;
  let fixture: ComponentFixture<AddProdDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProdDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProdDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
