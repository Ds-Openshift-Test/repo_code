import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes'; // Importar usando el nombre correcto

export const appConfig = {
  providers: [
    provideRouter(appRoutes)
  ]
};