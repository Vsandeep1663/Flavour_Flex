import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloginComponent } from './blogin.component';

describe('BloginComponent', () => {
  let component: BloginComponent;
  let fixture: ComponentFixture<BloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloginComponent]
    });
    fixture = TestBed.createComponent(BloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
