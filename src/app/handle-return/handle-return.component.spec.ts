import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleReturnComponent } from './handle-return.component';

describe('HandleReturnComponent', () => {
  let component: HandleReturnComponent;
  let fixture: ComponentFixture<HandleReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandleReturnComponent]
    });
    fixture = TestBed.createComponent(HandleReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
