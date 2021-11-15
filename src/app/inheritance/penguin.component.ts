import { Component } from '@angular/core';
import { AnimalComponent } from './animal.component';

@Component({
  selector: 'app-penguin',
  template: `
    <h1>I'm a {{makeSound()}} and I have {{numberOfLegs}} legs</h1>
  `,
})
export class PenguinComponent extends AnimalComponent {
  public makeSound(): string {
    return 'Cat';
  }
}
