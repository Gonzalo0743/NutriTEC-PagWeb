import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPDNutriComponent } from './add-pdnutri.component';

describe('AddPDNutriComponent', () => {
  let component: AddPDNutriComponent;
  let fixture: ComponentFixture<AddPDNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPDNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPDNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
