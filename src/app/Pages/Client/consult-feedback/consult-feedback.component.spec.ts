import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultFeedbackComponent } from './consult-feedback.component';

describe('ConsultFeedbackComponent', () => {
  let component: ConsultFeedbackComponent;
  let fixture: ComponentFixture<ConsultFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
