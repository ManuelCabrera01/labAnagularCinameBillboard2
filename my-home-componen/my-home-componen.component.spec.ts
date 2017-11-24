import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomeComponen } from './my-home-componen.component';

describe('MyHomeComponen', () => {
  let component: MyHomeComponen;
  let fixture: ComponentFixture<MyHomeComponen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomeComponen ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomeComponen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
