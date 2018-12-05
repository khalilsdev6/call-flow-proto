import { Component, OnInit, AfterContentInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { WorkflowDataService } from '../../services/workflow-data.service';
import { Subscription } from 'rxjs';
import { CallFlowLayout } from '../../classes/models/call-flow-layout';


@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DesignerComponent implements AfterContentInit, OnDestroy {
  private workflowDataService: WorkflowDataService;
  private workflowDataSubscription: Subscription;
  private callFlowLayout: CallFlowLayout = new CallFlowLayout();

  constructor(private workflow: WorkflowDataService) {
    this.workflowDataService = workflow;
  }

  createSubscriptions (): void {
    this.workflowDataSubscription = this.workflowDataService.workflowData.subscribe(
      (workflowData: any) => {
        this.callFlowLayout.update(workflowData);
      }
    );
  }

  ngOnDestroy(): void {
    this.workflowDataSubscription.unsubscribe();
  }

  ngAfterContentInit(): void {
    this.callFlowLayout.setupTree('#designer');
    this.createSubscriptions();
  }

  private onNodeAdded () {
    // TODO: workflowDataService.addNode()
  }

  private onNodeRemoved () {
    // TODO: workflowDataService.removeNode()
  }

  private onNodeEdited () {
    // TODO: workflowDataService.editNode()
  }

  private onNodeMoved () {
    // TODO: workflowDataService.nodeMoved()
  }

  private saveFlow () {
    console.log('Save flow clicked');
  }

  private cancelFlowChanges () {
    console.log('Cancel flow clicked');
  }

  private deleteFlow () {
    console.log('Delete flow clicked');
  }

  private testFlow () {
    console.log('Test flow clicked');
  }

}
