import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferZoneComponent } from './product-offer-zone.component';

describe('ProductOfferZoneComponent', () => {
  let component: ProductOfferZoneComponent;
  let fixture: ComponentFixture<ProductOfferZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOfferZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOfferZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
