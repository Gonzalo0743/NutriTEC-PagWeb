import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdDishComponent } from './edit-prod-dish.component';

describe('EditProdDishComponent', () => {
  let component: EditProdDishComponent;
  let fixture: ComponentFixture<EditProdDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProdDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProdDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
