import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  template: `
    <ng-container *ngTemplateOutlet="templateRef;
      context: {$implicit: data}">

    </ng-container>
  `
})
export class NgContainerComponent {
  public data: any = 1;

  public templateRef: TemplateRef<any>;
}

