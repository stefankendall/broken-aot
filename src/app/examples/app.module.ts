import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {MainComponent} from './MainComponent';
import {AppComponent} from './AppComponent';
import {routing} from './routes';
import {ComponentsModule} from '../components/index';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    MainComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
