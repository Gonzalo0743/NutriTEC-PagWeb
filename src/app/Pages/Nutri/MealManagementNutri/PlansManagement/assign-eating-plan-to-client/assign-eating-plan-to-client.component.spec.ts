import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEatingPlanToClientComponent } from './assign-eating-plan-to-client.component';

describe('AssignEatingPlanToClientComponent', () => {
  let component: AssignEatingPlanToClientComponent;
  let fixture: ComponentFixture<AssignEatingPlanToClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignEatingPlanToClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEatingPlanToClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
