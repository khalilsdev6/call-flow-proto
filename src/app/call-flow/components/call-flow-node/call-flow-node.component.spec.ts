import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallFlowNodeComponent } from './call-flow-node.component';

describe('CallFlowNodeComponent', () => {
  let component: CallFlowNodeComponent;
  let fixture: ComponentFixture<CallFlowNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallFlowNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallFlowNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
