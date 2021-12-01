import { ENV } from './../environments/environment';
import { GlobalService } from './shared/global.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public stage: 'Demo' | 'Showcase' = 'Showcase';

  constructor(
    @Inject(ENV) public env: any,
    public globals: GlobalService
  ) { }

  onValueChanged(e): void {
    console.log(`Changed value is ${e}`);
  }

}


