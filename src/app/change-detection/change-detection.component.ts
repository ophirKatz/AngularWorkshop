import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-change-detection',
  template: `
    <button (click)="toggle()">Toggle</button>
    <app-todo-item [todo]="todo"></app-todo-item>
  `
})
export class ChangeDetectionComponent implements OnInit {

  public todo: TodoItem;

  constructor() {
    this.todo = {
      description: `Write some code`,
      completed: false
    };
  }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.todo.description = 'New Description';
  }

}
