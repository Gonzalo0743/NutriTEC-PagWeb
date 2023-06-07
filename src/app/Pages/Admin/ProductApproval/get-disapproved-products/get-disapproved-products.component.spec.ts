import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDisapprovedProductsComponent } from './get-disapproved-products.component';

describe('GetDisapprovedProductsComponent', () => {
  let component: GetDisapprovedProductsComponent;
  let fixture: ComponentFixture<GetDisapprovedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDisapprovedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDisapprovedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
