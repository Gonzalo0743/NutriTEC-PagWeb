import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEatingPlanComponent } from './get-eating-plan.component';

describe('GetEatingPlanComponent', () => {
  let component: GetEatingPlanComponent;
  let fixture: ComponentFixture<GetEatingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEatingPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEatingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
