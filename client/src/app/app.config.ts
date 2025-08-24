import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { API_URL } from './core/token/api-url.token';
import { environment } from '../environments/environment';
import { authInterceptor, baseUrlInterceptor } from './core/interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    { provide: API_URL, useValue: environment.apiUrl },
    provideHttpClient(
      withInterceptors([baseUrlInterceptor, authInterceptor]),
      withFetch(),
    ),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
