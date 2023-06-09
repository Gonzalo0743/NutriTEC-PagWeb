import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientEatingPlanComponent } from './get-client-eating-plan.component';

describe('GetClientEatingPlanComponent', () => {
  let component: GetClientEatingPlanComponent;
  let fixture: ComponentFixture<GetClientEatingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientEatingPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetClientEatingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
