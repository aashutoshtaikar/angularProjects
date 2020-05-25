import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickgridWrapperComponent } from './slickgrid-wrapper.component';

describe('SlickgridWrapperComponent', () => {
  let component: SlickgridWrapperComponent;
  let fixture: ComponentFixture<SlickgridWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlickgridWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlickgridWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
