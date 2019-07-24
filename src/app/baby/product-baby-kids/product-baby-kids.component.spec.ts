import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBabyKidsComponent } from './product-baby-kids.component';

describe('ProductBabyKidsComponent', () => {
  let component: ProductBabyKidsComponent;
  let fixture: ComponentFixture<ProductBabyKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBabyKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBabyKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
