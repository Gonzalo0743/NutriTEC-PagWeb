import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAsocPacComponent } from './search-asoc-pac.component';

describe('SearchAsocPacComponent', () => {
  let component: SearchAsocPacComponent;
  let fixture: ComponentFixture<SearchAsocPacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAsocPacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAsocPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
