import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S9ConsumingHttpServicesComponent } from './s9-consuming-http-services.component';

describe('S9ConsumingHttpServicesComponent', () => {
  let component: S9ConsumingHttpServicesComponent;
  let fixture: ComponentFixture<S9ConsumingHttpServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S9ConsumingHttpServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S9ConsumingHttpServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
