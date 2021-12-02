import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <p>{{todo.description}} - completed: {{todo.completed}}</p>
    <app-child></app-child>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements DoCheck {

  @Input() todo: TodoItem;

  ngDoCheck(): void {
    console.log('todo-item DoCheck');
  }
}

@Component({
  selector: 'app-child',
  template: `<app-grandchild *ngFor="let _ of amount"></app-grandchild>`
})
export class ChildComponent implements DoCheck {

  public amount = Array(1000);

  ngDoCheck(): void {
    console.log('child DoCheck');
  }

}

@Component({
  selector: 'app-grandchild',
  template: ``
})
export class GrandchildComponent implements DoCheck {

  ngDoCheck(): void {
    console.log('grandchild DoCheck');
  }

}
