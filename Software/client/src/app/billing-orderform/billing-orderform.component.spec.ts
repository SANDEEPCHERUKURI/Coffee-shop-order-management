import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingOrderformComponent } from './billing-orderform.component';

describe('BillingOrderformComponent', () => {
  let component: BillingOrderformComponent;
  let fixture: ComponentFixture<BillingOrderformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingOrderformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingOrderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
