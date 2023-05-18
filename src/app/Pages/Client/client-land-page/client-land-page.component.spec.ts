import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLandPageComponent } from './client-land-page.component';

describe('ClientLandPageComponent', () => {
  let component: ClientLandPageComponent;
  let fixture: ComponentFixture<ClientLandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLandPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
