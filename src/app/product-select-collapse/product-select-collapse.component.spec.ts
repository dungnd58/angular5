import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectCollapseComponent } from './product-select-collapse.component';

describe('ProductSelectCollapseComponent', () => {
  let component: ProductSelectCollapseComponent;
  let fixture: ComponentFixture<ProductSelectCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSelectCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
