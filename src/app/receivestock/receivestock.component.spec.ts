import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivestockComponent } from './receivestock.component';

describe('EmployeesComponent', () => {
  let component: ReceivestockComponent;
  let fixture: ComponentFixture<ReceivestockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceivestockComponent]
    });
    fixture = TestBed.createComponent(ReceivestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
