import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductApprovalLandPageComponent } from './product-approval-land-page.component';

describe('ProductApprovalLandPageComponent', () => {
  let component: ProductApprovalLandPageComponent;
  let fixture: ComponentFixture<ProductApprovalLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductApprovalLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductApprovalLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
