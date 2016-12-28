import './polyfills';
//import 'babel-polyfill';
//import 'zone.js/dist/zone';

//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModuleNgFactory } from './aot/src/app/app.module.ngfactory';

//if (environment.production) {
  enableProdMode();
//}

//platformBrowserDynamic().bootstrapModule(AppModule);


import { platformBrowser } from '@angular/platform-browser';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
