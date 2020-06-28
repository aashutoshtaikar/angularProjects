import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforChangedetectionComponent } from './ngfor-changedetection.component';

describe('NgforChangedetectionComponent', () => {
  let component: NgforChangedetectionComponent;
  let fixture: ComponentFixture<NgforChangedetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforChangedetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforChangedetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
