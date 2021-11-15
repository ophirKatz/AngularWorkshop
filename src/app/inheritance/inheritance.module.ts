import { DogComponent } from './dog.component';
import { PenguinComponent } from './penguin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DogComponent, PenguinComponent],
  imports: [CommonModule],
  exports: [DogComponent, PenguinComponent]
})
export class InheritanceModule { }
