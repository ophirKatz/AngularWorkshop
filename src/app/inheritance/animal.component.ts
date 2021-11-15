import { Component, Input } from '@angular/core';

@Component({
  // selector: 'app-animal',   // Is this needed?
  template: '', // Is this needed?
})
export abstract class AnimalComponent {
  @Input() numberOfLegs: number;

  public abstract makeSound(): string;
}
