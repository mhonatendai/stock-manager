import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveStockComponent } from './receive-stock.component';

describe('EmployeesComponent', () => {
  let component: ReceiveStockComponent;
  let fixture: ComponentFixture<ReceiveStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveStockComponent]
    });
    fixture = TestBed.createComponent(ReceiveStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
