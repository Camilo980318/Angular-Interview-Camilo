import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from './comentarios/comentarios.component';



@NgModule({
  declarations: [ComentariosComponent],
  imports: [
    CommonModule
  ],
  exports: [ComentariosComponent],
})
export class ComponentModule { }
