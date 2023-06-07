import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApprovedProductsComponent } from './get-approved-products.component';

describe('GetApprovedProductsComponent', () => {
  let component: GetApprovedProductsComponent;
  let fixture: ComponentFixture<GetApprovedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetApprovedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApprovedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
