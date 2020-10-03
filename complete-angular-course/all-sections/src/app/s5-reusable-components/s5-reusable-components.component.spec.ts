import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5ReusableComponentsComponent } from './s5-reusable-components.component';

describe('S5ReusableComponentsComponent', () => {
  let component: S5ReusableComponentsComponent;
  let fixture: ComponentFixture<S5ReusableComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5ReusableComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5ReusableComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
