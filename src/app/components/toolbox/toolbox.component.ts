import { Component, OnInit } from '@angular/core';

// import socialMediaImg from '../../../assets/images/call-flow-nodes/face-id-smartphone.svg'
// import numberImg from '../../../assets/images/call-flow-nodes/dial-finger-1.svg'

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  public toolboxNodes = [
    { image: '../../../assets/images/call-flow-nodes/face-id-smartphone.svg', name: 'Social Media' },
    { image: '../../../assets/images/call-flow-nodes/dial-finger-1.svg', name: 'Number' },
    { image: '../../../assets/images/call-flow-nodes/time-clock-circle.svg', name: 'Business Hours' },
    { image: '../../../assets/images/call-flow-nodes/hierarchy-files.svg', name: 'Press 1 For...' },
    { image: '../../../assets/images/call-flow-nodes/paginate-filter-music.svg', name: 'Voicemail' },
    { image: '../../../assets/images/call-flow-nodes/house-chimney.svg', name: 'Location' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
