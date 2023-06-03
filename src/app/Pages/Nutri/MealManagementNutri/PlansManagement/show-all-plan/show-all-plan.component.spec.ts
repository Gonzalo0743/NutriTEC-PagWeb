import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPlanComponent } from './show-all-plan.component';

describe('ShowAllPlanComponent', () => {
  let component: ShowAllPlanComponent;
  let fixture: ComponentFixture<ShowAllPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
