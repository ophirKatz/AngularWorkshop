import { TodoItem } from './todo-item';
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <div>
      <h1>List of todos</h1>
      <ul *ngIf="todos">
        <li *ngFor="let todo of todos">
          <app-todo-item [item]="todo"></app-todo-item>
        </li>
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() todos: TodoItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
