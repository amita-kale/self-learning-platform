import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsingHTMLRoutingModule } from './crud-using-html-routing.module';
import { CrudUsingHTMLComponent } from './crud-using-html/crud-using-html.component';


@NgModule({
  declarations: [
    CrudUsingHTMLComponent
  ],
  imports: [
    CommonModule,
    CrudUsingHTMLRoutingModule
  ]
})
export class CrudUsingHTMLModule { }
