import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { todos$, Todo } from './data';
import { filter, map } from 'rxjs/operators';

export type IndexedTodo = {
  title: string;
  description: string;
  index: number;
};

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  public todos: IndexedTodo[];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    // TODO : What's missing here?
    todos$.pipe(
      map((todos: Todo[]) => todos.map(this.indexTodo)),
      filter((todos: IndexedTodo[]) => {
        return !todos.some((x: IndexedTodo) => x.title === 'Work');
      })
    ).subscribe(todos => {
      this.todos = todos;
      this.cd.detectChanges();
    });
  }

  private indexTodo(todo: Todo, index: number): IndexedTodo {
    return {
      ...todo,
      index
    };
  }

}
