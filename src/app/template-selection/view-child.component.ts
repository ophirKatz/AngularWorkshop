import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  template: `
    <ng-template #hello let-data>
      {{data}}
    </ng-template>
  `
})
export class ViewChildComponent {

  @ViewChild('hello') public helloRef: TemplateRef<any>;
}

