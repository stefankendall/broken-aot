import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['../components/styles/index.scss'],
  template: `
    <router-outlet></router-outlet>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}
