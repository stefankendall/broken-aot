import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'sl-h1',
  template: `h1: <ng-content></ng-content>`,
  styleUrls: ['SLH1.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SLH1 {}
