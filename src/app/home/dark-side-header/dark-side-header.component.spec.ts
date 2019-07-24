import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSideHeaderComponent } from './dark-side-header.component';

describe('DarkSideHeaderComponent', () => {
  let component: DarkSideHeaderComponent;
  let fixture: ComponentFixture<DarkSideHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkSideHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
