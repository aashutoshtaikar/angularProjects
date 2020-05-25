import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6DirectivesComponent } from './s6-directives.component';

describe('S6DirectivesComponent', () => {
  let component: S6DirectivesComponent;
  let fixture: ComponentFixture<S6DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6DirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
