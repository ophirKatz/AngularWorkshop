import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <span (click)="onToggle()" *ngIf="item">
      {{item.description}} - completed: {{item.completed}}
    </span>
  `
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() toggle: EventEmitter<TodoItem> = new EventEmitter<TodoItem>(null);

  constructor() { }

  ngOnInit(): void {

  }

  public onToggle(): void {
    this.toggle.emit(this.item);
  }

}
