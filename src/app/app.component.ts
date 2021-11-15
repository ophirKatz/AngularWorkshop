import { GlobalService } from './shared/global.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public stage: 'Demo' | 'Showcase' = 'Showcase';

  constructor(public globals: GlobalService) { }

  onValueChanged(e): void {
    console.log(`Changed value is ${e}`);
  }

}


