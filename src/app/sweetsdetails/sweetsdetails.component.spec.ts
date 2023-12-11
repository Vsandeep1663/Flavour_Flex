import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsdetailsComponent } from './sweetsdetails.component';

describe('SweetsdetailsComponent', () => {
  let component: SweetsdetailsComponent;
  let fixture: ComponentFixture<SweetsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetsdetailsComponent]
    });
    fixture = TestBed.createComponent(SweetsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
