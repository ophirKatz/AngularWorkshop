import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoItemComponent } from './todo-item.component';
import { ChangeDetectionComponent } from './change-detection.component';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, ChangeDetectionComponent],
  imports: [
    CommonModule
  ],
  exports: [ChangeDetectionComponent]
})
export class ChangeDetectionModule { }
