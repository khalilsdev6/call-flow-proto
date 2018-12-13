import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const testWorkflowData = [
  { name: 'Main bakery', parent: 'null',
    image: 'assets/images/call-flow-nodes/house-chimney.svg',
    children: [
      { name: '1 (410) 123-2244', parent: 'Main bakery',
      image: 'assets/images/call-flow-nodes/dial-finger-1.svg',
      children: [
        { name: 'Hours', parent: '1 (410) 123-2244',
        image: 'assets/images/call-flow-nodes/time-clock-circle.svg',
        children: [
          { name: 'Closed', parent: 'Hours',
            image: 'assets/images/call-flow-nodes/house-chimney.svg',
            children: [
            { name: 'Voicemail', parent: 'Closed',
              image: 'assets/images/call-flow-nodes/house-chimney.svg' }
          ] },
          { name: 'Open', parent: 'Hours',
            image: 'assets/images/call-flow-nodes/house-chimney.svg',
            children: [
            { name: 'Reception', parent: 'Open',
              image: 'assets/images/call-flow-nodes/house-chimney.svg',
              children: [
              { name: 'Voicemail', parent: 'Reception',
                image: 'assets/images/call-flow-nodes/house-chimney.svg' }
            ] }
          ] }
        ] }
      ] }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class WorkflowDataService {

  public workflowData: BehaviorSubject<any> = new BehaviorSubject<any>(testWorkflowData);

  constructor() { }
}
