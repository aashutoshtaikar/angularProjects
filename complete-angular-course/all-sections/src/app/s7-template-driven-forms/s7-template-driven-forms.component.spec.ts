import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S7TemplateDrivenFormsComponent } from './s7-template-driven-forms.component';

describe('S7TemplateDrivenFormsComponent', () => {
  let component: S7TemplateDrivenFormsComponent;
  let fixture: ComponentFixture<S7TemplateDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S7TemplateDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S7TemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
