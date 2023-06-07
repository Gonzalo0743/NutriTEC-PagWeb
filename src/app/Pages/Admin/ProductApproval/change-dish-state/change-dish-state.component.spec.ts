import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDishStateComponent } from './change-dish-state.component';

describe('ChangeDishStateComponent', () => {
  let component: ChangeDishStateComponent;
  let fixture: ComponentFixture<ChangeDishStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDishStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDishStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
