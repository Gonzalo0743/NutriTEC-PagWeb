import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientByNutriComponent } from './get-client-by-nutri.component';

describe('GetClientByNutriComponent', () => {
  let component: GetClientByNutriComponent;
  let fixture: ComponentFixture<GetClientByNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClientByNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetClientByNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
