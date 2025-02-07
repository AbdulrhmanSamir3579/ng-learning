import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {AppTranslateModule} from './shared/modules/app-translate.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(AppTranslateModule.forRoot())
  ]
};
