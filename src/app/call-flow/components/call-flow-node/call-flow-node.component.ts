import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../models/node';

@Component({
  selector: 'app-call-flow-node',
  templateUrl: './call-flow-node.component.html',
  styleUrls: ['./call-flow-node.component.scss']
})
export class CallFlowNodeComponent implements OnInit {

  @Input('node') node: Node;
  @Input('isTerminalNode') isTerminalNode: boolean;
  @Input('isTreeNode') isTreeNode: boolean;

  constructor() { }

  ngOnInit() {
  }

}
