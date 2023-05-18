import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProdDishComponent } from './delete-prod-dish.component';

describe('DeleteProdDishComponent', () => {
  let component: DeleteProdDishComponent;
  let fixture: ComponentFixture<DeleteProdDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProdDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProdDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
