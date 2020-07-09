import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDataService, SelectedGuard } from './services.index';

@NgModule({
  declarations: [],
  providers: [
    GetDataService,
    SelectedGuard
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
