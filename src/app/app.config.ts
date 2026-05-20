import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), ConfigService,

    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true
    }]
};
