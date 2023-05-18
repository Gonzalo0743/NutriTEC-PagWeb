import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePDNutriComponent } from './delete-pdnutri.component';

describe('DeletePDNutriComponent', () => {
  let component: DeletePDNutriComponent;
  let fixture: ComponentFixture<DeletePDNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePDNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePDNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
