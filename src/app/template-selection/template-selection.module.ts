import { CommonModule } from '@angular/common';
import { TemplateSelectionComponent } from './template-selection.component';
import { NgModule } from '@angular/core';
import { AnimalComponent, AnimalSelectorComponent } from './template-selector.component';

@NgModule({
  declarations: [AnimalSelectorComponent, AnimalComponent, TemplateSelectionComponent],
  imports: [CommonModule],
  exports: [TemplateSelectionComponent]
})
export class TemplateSelectionModule { }
