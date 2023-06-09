import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEatingPlanComponent } from './add-eating-plan.component';

describe('AddEatingPlanComponent', () => {
  let component: AddEatingPlanComponent;
  let fixture: ComponentFixture<AddEatingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEatingPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEatingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
