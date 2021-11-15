import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TodoItem } from './todo-item';

export class TodoItemService {
  private todos: Subject<TodoItem[]> = new BehaviorSubject<TodoItem[]>([]);
  public readonly todos$: Observable<TodoItem[]> = this.todos;

  constructor() {
    const items: TodoItem[] = Array(100).fill(0).map((_, index) => index + 1)
      .map(index => {
        const item: TodoItem = {
          id: index,
          description: `Write some code on line ${index}`,
          completed: false
        };

        return item;
      });

    this.todos.next(items);
  }

}
