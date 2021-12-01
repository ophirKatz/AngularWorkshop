import { theme } from './theme';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[themify]'
})
export class ThemifyDirective {

  constructor(
    private elementRef: ElementRef,
  ) {
    // TODO : When should we unsubscribe?
    theme.state.subscribe(v => {
      if (v === 'dark') {
        this.elementRef.nativeElement.classList.add('dark-theme');
      } else {
        this.elementRef.nativeElement.classList.remove('dark-theme');
      }
    });
  }

}
