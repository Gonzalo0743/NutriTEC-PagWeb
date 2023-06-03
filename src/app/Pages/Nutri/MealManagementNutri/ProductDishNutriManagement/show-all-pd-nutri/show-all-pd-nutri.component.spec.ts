import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPdNutriComponent } from './show-all-pd-nutri.component';

describe('ShowAllPdNutriComponent', () => {
  let component: ShowAllPdNutriComponent;
  let fixture: ComponentFixture<ShowAllPdNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllPdNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllPdNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
