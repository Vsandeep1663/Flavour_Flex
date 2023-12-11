import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreameComponent } from './icecreame.component';

describe('IcecreameComponent', () => {
  let component: IcecreameComponent;
  let fixture: ComponentFixture<IcecreameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcecreameComponent]
    });
    fixture = TestBed.createComponent(IcecreameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
