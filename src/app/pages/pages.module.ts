import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostListComponent } from './post-list/post-list.component';
import { PAGES_ROUTES } from './pages.routes';
import { ServiceModule } from '../services/services.module';
import { ComponentModule } from '../components/component.module';



@NgModule({
  declarations: [
    PagesComponent,
    PostListComponent,
    PostDetailComponent,
    NotFoundComponent
  ],
  exports: [
    PostListComponent,
    PostDetailComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ServiceModule,
    ComponentModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
