import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionDemoComponent } from './change-detection-demo.component';

describe('ChangeDetectionDemoComponent', () => {
  let component: ChangeDetectionDemoComponent;
  let fixture: ComponentFixture<ChangeDetectionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
