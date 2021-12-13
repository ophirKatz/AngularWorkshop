import { AfterViewInit, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  template: ``
})
export abstract class TemplateSelectorComponent {
  @Input() data: any;

  abstract selectTemplate(): TemplateRef<any>;
}

@Component({
  selector: 'app-animal-selector',
  template: `
    <ng-template #dog let-legs>The dog has spots</ng-template>
    <ng-template #cat let-legs>The cat has orange fur</ng-template>

    <ng-container *ngTemplateOutlet="selectTemplate(); context: {$implicit: data}">

    </ng-container>
  `
})
export class AnimalSelectorComponent extends TemplateSelectorComponent implements AfterViewInit {

  @ViewChild('dog') public dogTemplate: TemplateRef<any>;
  @ViewChild('cat') public catTemplate: TemplateRef<any>;

  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  public selectTemplate(): TemplateRef<any> {
    if (this.data === 'Dog') {
      return this.dogTemplate;
    } else if (this.data === 'Cat') {
      return this.catTemplate;
    }
  }

  ngAfterViewInit(): void {
    // After view init, the ViewChild properties are recognized.
    // We want to trigger change detection so that the template reference outlet is updated.
    this.cd.detectChanges();
  }

}

@Component({
  selector: 'app-animal',
  template: `
    Dog
    <br />
    <app-animal-selector data="Dog"></app-animal-selector>
    <br />
    Cat
    <br />
    <app-animal-selector data="Cat"></app-animal-selector>
  `
})
export class AnimalComponent {

}

