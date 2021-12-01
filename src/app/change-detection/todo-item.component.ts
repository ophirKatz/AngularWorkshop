import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <span (click)="onToggle()" *ngIf="item">
      {{item.description}} - completed: {{item.completed}}
    </span>
  `
})
export class TodoItemComponent implements OnInit, OnChanges {

  @Input() item: TodoItem;
  @Output() toggle: EventEmitter<TodoItem> = new EventEmitter<TodoItem>(null);

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes');
  }

  ngOnInit(): void {

  }

  public onToggle(): void {
    this.toggle.emit(this.item);
  }

}
