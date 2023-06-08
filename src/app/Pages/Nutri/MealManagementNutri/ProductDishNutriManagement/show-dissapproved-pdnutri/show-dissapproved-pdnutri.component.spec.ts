import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDissapprovedPDNutriComponent } from './show-dissapproved-pdnutri.component';

describe('ShowDissapprovedPDNutriComponent', () => {
  let component: ShowDissapprovedPDNutriComponent;
  let fixture: ComponentFixture<ShowDissapprovedPDNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDissapprovedPDNutriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDissapprovedPDNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
