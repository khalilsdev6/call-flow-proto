import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxNodeComponent } from './toolbox-node.component';

describe('ToolboxNodeComponent', () => {
  let component: ToolboxNodeComponent;
  let fixture: ComponentFixture<ToolboxNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
