import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProductsStateComponent } from './get-all-products-state.component';

describe('GetAllProductsStateComponent', () => {
  let component: GetAllProductsStateComponent;
  let fixture: ComponentFixture<GetAllProductsStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllProductsStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllProductsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
