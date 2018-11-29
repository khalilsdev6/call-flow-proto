import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CallFlowComponent } from './call-flow/call-flow.component';
import { CallFlowNodeComponent } from './call-flow/components/call-flow-node/call-flow-node.component';

@NgModule({
  declarations: [
    AppComponent,
    CallFlowComponent,
    CallFlowNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
