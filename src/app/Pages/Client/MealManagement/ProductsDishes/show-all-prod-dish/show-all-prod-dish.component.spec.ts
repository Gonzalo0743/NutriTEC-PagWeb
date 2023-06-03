import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProdDishComponent } from './show-all-prod-dish.component';

describe('ShowAllProdDishComponent', () => {
  let component: ShowAllProdDishComponent;
  let fixture: ComponentFixture<ShowAllProdDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllProdDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllProdDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
