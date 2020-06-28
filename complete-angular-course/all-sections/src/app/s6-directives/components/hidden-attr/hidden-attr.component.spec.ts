import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenAttrComponent } from './hidden-attr.component';

describe('HiddenAttrComponent', () => {
  let component: HiddenAttrComponent;
  let fixture: ComponentFixture<HiddenAttrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenAttrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
