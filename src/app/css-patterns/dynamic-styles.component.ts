import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styles',
  template: `
    <p [class.red]="isRed" [attr.description]="description">This text is {{isRed ? 'Red' : 'Black'}}</p>
    <button (click)="isRed = !isRed">Change Color</button>
  `,
  styles: [
    `
      .red {
        color: red;
      }
    `
  ]
})
export class DynamicStylesComponent {
  public isRed = false;

  public get description(): string {
    return 'A ' + (this.isRed ? 'Red' : 'Black') + ' Text';
  }
}
