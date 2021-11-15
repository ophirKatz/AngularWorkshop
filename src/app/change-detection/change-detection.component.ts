import { TodoItemService } from './todo-item.service';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-change-detection',
  template: `
    <button (click)="toggleFirst()">Toggle First Item</button>
    <button (click)="addTodo()">Add Todo to List</button>
    <div>
        <app-todo-list [todos]="todos"></app-todo-list>
    </div>
  `,
  styles: [
    `
      button:hover {
        border-color: red;
      }
    `
  ],
  providers: [TodoItemService]
})
export class ChangeDetectionComponent implements OnInit {

  public todos: TodoItem[];

  constructor(todosService: TodoItemService) {
    // TODO : What's missing here?
    todosService.todos$.subscribe(items => this.todos = items);
  }

  ngOnInit(): void {
  }

  public toggleFirst(): void {
    this.todos[0].completed = !this.todos[0].completed;
  }

  public addTodo(): void {
    const newTodos = this.todos.slice(0);
    const newItem: TodoItem = {
      id: 1,
      description: 'Write some more code',
      completed: false
    };
    newTodos.unshift(newItem);
    this.todos = newTodos;
  }

}
