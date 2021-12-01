import { BehaviorSubject, Observable } from 'rxjs';

export type ThemeColor = 'dark' | 'light';

export type ThemeState = {
  state: Observable<ThemeColor>
};

const stateSubject = new BehaviorSubject<ThemeColor>('light');

export const theme: ThemeState = {
  state: stateSubject
};

export function toggleTheme(): void {
  stateSubject.next(stateSubject.value === 'dark' ? 'light' : 'dark');
}
