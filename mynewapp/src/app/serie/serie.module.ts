import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { SerieListComponent } from './serie-list/serie-list.component';

@NgModule({
  imports: [
    CommonModule,
    SerieComponent,
    SerieListComponent
  ],
  exports: [SerieComponent, SerieListComponent]
})
export class SerieModule { }
