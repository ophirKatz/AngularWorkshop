import { FlexBoxComponent } from './flex-box.component';
import { CssPatternsComponent } from './css-pattern.component';
import { DynamicStylesComponent } from './dynamic-styles.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CssPatternsComponent,
    DynamicStylesComponent,
    FlexBoxComponent
  ],
  exports: [CssPatternsComponent]
})
export class CssPatternsModule { }
