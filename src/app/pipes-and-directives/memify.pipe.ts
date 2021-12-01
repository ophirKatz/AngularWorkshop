import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memify'
})
export class MemifyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let memedString = '';
    let state = false;
    for (const c of value) {
      if (state) {
        memedString = memedString + c.toUpperCase();
      } else {
        memedString = memedString + c.toLowerCase();
      }
      state = !state;
    }

    return memedString;
  }

}
