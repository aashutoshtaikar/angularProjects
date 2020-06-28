import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifThenElseComponent } from './ngif-then-else.component';

describe('NgifThenElseComponent', () => {
  let component: NgifThenElseComponent;
  let fixture: ComponentFixture<NgifThenElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifThenElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifThenElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
