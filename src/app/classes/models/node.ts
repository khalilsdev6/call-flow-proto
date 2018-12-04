
import { NodeId } from '../interfaces/node-id';

export enum NodeNames {
  NUMBER = 'Number',
  SOCIAL_MEDIA = 'Social Media',
  DIAL_MENU = 'Dial Menu',
  VOICEMAIL = 'Voicemail',
  BUSINESS_HOURS = 'Business Hours'
}

export class Node {

  public name: string;
  public icon: string;
  public subTreeTop: Node[] = [];
  public subTreeBottom: Node[] = [];
  public id: NodeId;
  public parentId: NodeId = null;

  constructor (name: NodeNames | string, icon: string, subTreeTop?: Node[], subTreeBottom?: Node[], parentId?: NodeId) {
    this.name = name;
    this.icon = icon;
    this.subTreeTop = subTreeTop ? subTreeTop : [];
    this.subTreeBottom = subTreeBottom ? subTreeBottom : [];
    this.parentId = parentId ? parentId : null;
  }

  /**
   * @static
   * @func createNodeID
   * @desc Creates a node id to use for identifying a Node.
   */

  public static createNodeID = (): NodeId => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    const hash =  s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    const id: NodeId = {id: hash};
    return id;
  }

  hasSubTreeTop (): boolean {
    return this.subTreeTop.length !== 0;
  }

  hasSubTreeBottom (): boolean {
    return this.subTreeBottom.length !== 0;
  }

  hasParent (): boolean {
    return this.parentId !== null;
  }
}
