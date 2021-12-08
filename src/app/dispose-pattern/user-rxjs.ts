import { SubSink } from 'subsink';
import { of, SubscriptionLike } from 'rxjs';
import { Disposable } from 'using-statement';

export function unsubscribeBy(disposable: Disposable): SubscriptionLike {
  return {
    unsubscribe: disposable.dispose,
    closed: true
  };
}

const subs = new SubSink();

const obs = of(1);
const d = {
  dispose: () => console.log(1)
};

subs.sink = unsubscribeBy(d);
subs.sink = obs.subscribe(console.log);

subs.unsubscribe();
