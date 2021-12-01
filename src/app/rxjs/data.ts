import { BehaviorSubject, Observable, of } from 'rxjs';

export type Todo = {
  title: string;
  description: string;
};

export const todos1: Todo[] = [
  {
    title: 'Work',
    description: 'Finish your tasks!!!'
  },
  {
    title: 'Workout',
    description: 'Go to the gym again :('
  },
  {
    title: 'Go shopping',
    description: 'Buy a carton of milk'
  },
  {
    title: 'Learn a new technology',
    description: 'Learn how to use rxjs'
  }
];

export const todos2: Todo[] = [
  {
    title: 'Workout',
    description: 'Go to the gym again :('
  },
  {
    title: 'Go shopping',
    description: 'Buy a carton of milk'
  },
  {
    title: 'Learn a new technology',
    description: 'Learn how to use rxjs'
  }
];

export const todos3: Todo[] = [
  {
    title: 'Eat',
    description: 'Eat some of Idit\'s finest food'
  },
  {
    title: 'Sleep',
    description: 'Shnatz for 2 hours'
  },
  {
    title: 'Go out with friends',
    description: 'Partyyy'
  }
];

let i = 0;

function generateTodos(): Todo[] {
  const current = i;
  i++;
  switch (current % 3) {
    case 0:
      return todos1;
    case 1:
      return todos2;
    case 2:
      return todos3;
  }
}

const todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(todos2);
export const todos$: Observable<Todo[]> = todosSubject;

setInterval(() => todosSubject.next(generateTodos()), 1000);
