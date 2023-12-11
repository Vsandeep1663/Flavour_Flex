import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamdetailsComponent } from './icecreamdetails.component';

describe('IcecreamdetailsComponent', () => {
  let component: IcecreamdetailsComponent;
  let fixture: ComponentFixture<IcecreamdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcecreamdetailsComponent]
    });
    fixture = TestBed.createComponent(IcecreamdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
