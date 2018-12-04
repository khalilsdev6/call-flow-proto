
import { Node } from './node';

export class NodeTree {
  private tree: Node[] = [];
  constructor () {
  }

  /**
   * @func add
   * @desc Adds a node to the end of the tree.
   */

  public add (node: Node, index?: number) {
    this.tree.push(node);
  }

  /**
   * @func getTree
   * @desc Returns the entire tree.
   */

  public getTree (): Node[] {
    return this.tree;
  }
}
