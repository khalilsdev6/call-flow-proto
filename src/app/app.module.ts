import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesignerComponent } from './components/designer/designer.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { ToolboxNodeComponent } from './components/toolbox-node/toolbox-node.component';
import { ButtonComponent } from './shared/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    ToolboxComponent,
    ToolboxNodeComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
