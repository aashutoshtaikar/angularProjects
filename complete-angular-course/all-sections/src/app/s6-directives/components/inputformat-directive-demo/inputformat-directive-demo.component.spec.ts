import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputformatDirectiveDemoComponent } from './inputformat-directive-demo.component';

describe('InputformatDirectiveDemoComponent', () => {
  let component: InputformatDirectiveDemoComponent;
  let fixture: ComponentFixture<InputformatDirectiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputformatDirectiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputformatDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
