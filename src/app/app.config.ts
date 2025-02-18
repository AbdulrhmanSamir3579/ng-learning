import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {AppTranslateModule} from './shared/modules/app-translate.module';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideEffects} from '@ngrx/effects';
import {tourReducer} from './features/grid-cards/state/tours.reducers';
import {TourEffects} from './features/grid-cards/state/tours.effects';
// import {TourEffects} from './features/grid-cards/state/tours.effects';
// import {appReducers} from './core/app.states';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(AppTranslateModule.forRoot()),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideStore({tour: tourReducer}),
    provideStoreDevtools(),
    provideEffects([TourEffects])
    ]
};
