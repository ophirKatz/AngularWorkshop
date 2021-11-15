import { Component } from '@angular/core';
import { AnimalComponent } from './animal.component';

@Component({
  selector: 'app-dog',  // What's app-dog? Nothing much, how about you?
  template: `
    <h1>I'm a {{makeSound()}} and I have {{numberOfLegs}} legs</h1>
  `,
})
export class DogComponent extends AnimalComponent {
  public makeSound(): string {
    return 'Dog';
  }
}
