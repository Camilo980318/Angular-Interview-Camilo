import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SelectedGuard } from '../services/services.index';

// Definimos las rutas de las páginas
const pagesRoutes: Routes = [

    { path: 'post', component: PostListComponent },
    { path: 'post/:id', component: PostDetailComponent, canActivate: [SelectedGuard] },
    { path: '**', component: NotFoundComponent }

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);