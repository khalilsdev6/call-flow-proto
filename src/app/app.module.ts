import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesignerComponent } from './components/designer/designer.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { ToolboxNodeComponent } from './components/toolbox-node/toolbox-node.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    ToolboxComponent,
    ToolboxNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
