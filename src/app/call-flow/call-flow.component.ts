import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NodeTree } from './models/node-tree';
import { Node } from './models/node';
import * as d3 from 'd3';

/**
 * @desc Call Flow
 *
 * This component describes a prototype of a call flow
 * page.
 */

@Component({
  selector: 'app-call-flow',
  templateUrl: './call-flow.component.html',
  styleUrls: ['./call-flow.component.scss']
})
export class CallFlowComponent implements OnInit, AfterContentInit {

  private nodeTree: NodeTree = new NodeTree();

  ngAfterContentInit(): void {
    const node1 = new Node('Home', 'none');
    const node2 = new Node('Basic', 'none');

    this.nodeTree.add(node1);
    this.nodeTree.add(node2);

    this.nodeTree.add(
      new Node('subtree', 'none',
        [
          new Node('top sub tree item 1', 'none'),
          new Node('top sub tree item 2', 'none')
        ],
        [
          new Node('bottom sub tree item 1', 'none'),
          new Node('bottom sub tree item 2', 'none'),
          new Node('bottom sub tree item 3', 'none')
        ]
      )
    );
  }

  constructor() {
  }

  ngOnInit() {
  }

  isTreeNode (index: number): boolean {
    const tree: Node[] = this.nodeTree.getTree();
    const node: Node = tree[index + 1];

    if (node.hasSubTreeTop() || node.hasSubTreeBottom()) {
      return true;
    }
    return false;
  }

}
