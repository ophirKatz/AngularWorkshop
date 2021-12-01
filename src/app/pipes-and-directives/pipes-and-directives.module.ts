import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAndDirectivesComponent } from './pipes-and-directives.component';
import { MemifyPipe } from './memify.pipe';
import { ThemifyDirective } from './themify.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PipesAndDirectivesComponent,
    MemifyPipe,
    ThemifyDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PipesAndDirectivesComponent
  ]
})
export class PipesAndDirectivesModule { }
