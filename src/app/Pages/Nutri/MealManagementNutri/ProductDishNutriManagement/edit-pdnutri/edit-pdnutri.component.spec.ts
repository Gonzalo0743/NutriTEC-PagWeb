import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPDNutriComponent } from './edit-pdnutri.component';

describe('EditPDNutriComponent', () => {
  let component: EditPDNutriComponent;
  let fixture: ComponentFixture<EditPDNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPDNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPDNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
