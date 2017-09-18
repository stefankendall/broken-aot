import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import 'tooltipster';
import 'tooltipster/dist/css/tooltipster.bundle.min.css';

import 'jquery-ui';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/ui/widgets/slider';
import 'jquery.transit';

import {BrowserModule} from '@angular/platform-browser';
import {SLH1} from './atoms/SLH1';
import {RouterModule} from '@angular/router';
import Highcharts = require('highcharts/highcharts');
import patternFill = require('highcharts-pattern-fill/pattern-fill-v2');

patternFill(Highcharts);


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    SLH1
  ],
  exports: [
    SLH1
  ],
  providers: []
})
export class ComponentsModule {
}
