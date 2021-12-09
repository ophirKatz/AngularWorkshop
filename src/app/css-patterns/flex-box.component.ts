import { Component } from '@angular/core';

@Component({
  selector: 'app-flex-box',
  template: `
    <div class="flex box">
      <div class="flex">
        <h1>Facebook</h1>
        <input class="search"/>
      </div>
      <div class="flex">
        <h1>Feed</h1>
        <h1>Marketplace</h1>
      </div>
      <a><h1>Profile</h1></a>
    </div>
  `,
  styles: [
    `
      .flex {
        display: flex;
      }

      .box {
        margin: 5rem;
        background-color: lightblue;
        justify-content: space-between;
      }

      div {
        align-items: center;
      }

      .search {
        height: 1rem;
      }

      h1 {
        margin-right: 1rem;
      }
    `
  ]
})
export class FlexBoxComponent {
}
