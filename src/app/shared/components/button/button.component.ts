import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('text') text: string;
  @Input('image') image: string;
  @Input('type') type: 'neutral' | 'submit';
  @Output('handleClick') handleClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick () {
    this.handleClick.emit();
  }

  getClasses () {
    return {
      'neutral-button': this.type === 'neutral',
      'submit-button': this.type === 'submit'
    };
  }

}
