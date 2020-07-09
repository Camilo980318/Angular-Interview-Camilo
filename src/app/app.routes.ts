import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

// Definimos el acceso a las rutas de las páginas
const appRoutes: Routes = [

    { path: '', component: PagesComponent }

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });