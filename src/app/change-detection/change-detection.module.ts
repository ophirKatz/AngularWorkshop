import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent, GrandchildComponent, TodoItemComponent } from './todo-item.component';
import { ChangeDetectionComponent } from './change-detection.component';

@NgModule({
  declarations: [
    TodoItemComponent,
    ChangeDetectionComponent,
    ChildComponent,
    GrandchildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ChangeDetectionComponent]
})
export class ChangeDetectionModule { }
