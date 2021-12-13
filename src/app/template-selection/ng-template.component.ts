import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  template: `
    <ng-template #templateName let-data>
      {{data}}
    </ng-template>
  `
})
export class NgTemplateComponent { }

