import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackeryhomeComponent } from './backeryhome.component';

describe('BackeryhomeComponent', () => {
  let component: BackeryhomeComponent;
  let fixture: ComponentFixture<BackeryhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackeryhomeComponent]
    });
    fixture = TestBed.createComponent(BackeryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
