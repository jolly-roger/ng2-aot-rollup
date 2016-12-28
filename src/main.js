import './polyfills';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from './aot/src/app/app.module.ngfactory';
//if (environment.production) {
enableProdMode();
import { platformBrowser } from '@angular/platform-browser';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map