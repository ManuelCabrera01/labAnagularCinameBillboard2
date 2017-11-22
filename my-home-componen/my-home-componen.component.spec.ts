import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomeComponenComponent } from './my-home-componen.component';

describe('MyHomeComponenComponent', () => {
  let component: MyHomeComponenComponent;
  let fixture: ComponentFixture<MyHomeComponenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomeComponenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomeComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
