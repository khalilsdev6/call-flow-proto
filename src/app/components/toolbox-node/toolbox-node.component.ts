import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbox-node',
  templateUrl: './toolbox-node.component.html',
  styleUrls: ['./toolbox-node.component.scss']
})
export class ToolboxNodeComponent implements OnInit {

  @Input('node') node: any;

  constructor() { }

  ngOnInit() {
  }

}
