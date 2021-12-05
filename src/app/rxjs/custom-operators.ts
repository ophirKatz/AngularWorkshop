import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export function printHello(): MonoTypeOperatorFunction<any> {
  return (source: Observable<any>) => source.pipe(
    tap(_ => console.log('Hello!'))
  );
}
