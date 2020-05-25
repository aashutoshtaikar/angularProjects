import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMemoryExampleComponent } from './in-memory-example.component';

describe('InMemoryExampleComponent', () => {
  let component: InMemoryExampleComponent;
  let fixture: ComponentFixture<InMemoryExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InMemoryExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMemoryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
