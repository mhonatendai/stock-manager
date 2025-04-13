import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersComponent } from './purchase-orders.component';

describe('PurchaseOrdersComponent', () => {
  let component: PurchaseOrdersComponent;
  let fixture: ComponentFixture<PurchaseOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseOrdersComponent]
    });
    fixture = TestBed.createComponent(PurchaseOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
