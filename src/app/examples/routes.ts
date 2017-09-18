import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent} from './MainComponent';

export const routes: Routes = [
  {path: '', component: MainComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
