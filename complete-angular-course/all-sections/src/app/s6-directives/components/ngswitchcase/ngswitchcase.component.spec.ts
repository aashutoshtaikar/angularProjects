import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchcaseComponent } from './ngswitchcase.component';

describe('NgswitchcaseComponent', () => {
  let component: NgswitchcaseComponent;
  let fixture: ComponentFixture<NgswitchcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswitchcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
