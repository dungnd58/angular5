import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionsTabComponent } from './select-options-tab.component';

describe('SelectOptionsTabComponent', () => {
  let component: SelectOptionsTabComponent;
  let fixture: ComponentFixture<SelectOptionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOptionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
