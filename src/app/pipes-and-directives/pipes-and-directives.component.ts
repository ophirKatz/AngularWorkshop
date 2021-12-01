import { Component, OnInit } from '@angular/core';
import { theme, toggleTheme } from './theme';

@Component({
  selector: 'app-pipes-and-directives',
  templateUrl: './pipes-and-directives.component.html',
  styleUrls: ['./pipes-and-directives.component.css']
})
export class PipesAndDirectivesComponent implements OnInit {

  private toggleState = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public set toggleTheme(v: boolean) {
    toggleTheme();
    this.toggleState = v;
  }

  public get toggleTheme(): boolean {
    return this.toggleState;
  }

}
