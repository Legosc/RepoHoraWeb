import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourCreateComponent } from './hour-create.component';

describe('HourCreateComponent', () => {
  let component: HourCreateComponent;
  let fixture: ComponentFixture<HourCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
