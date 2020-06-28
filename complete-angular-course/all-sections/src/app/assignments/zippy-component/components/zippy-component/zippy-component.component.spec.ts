import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyComponentComponent } from './zippy-component.component';

describe('ZippyComponentComponent', () => {
  let component: ZippyComponentComponent;
  let fixture: ComponentFixture<ZippyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
