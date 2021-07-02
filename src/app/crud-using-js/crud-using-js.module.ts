import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsingJSRoutingModule } from './crud-using-js-routing.module';
import { CrudUsingJSComponent } from './crud-using-js/crud-using-js.component';


@NgModule({
  declarations: [
    CrudUsingJSComponent
  ],
  imports: [
    CommonModule,
    CrudUsingJSRoutingModule
  ]
})
export class CrudUsingJSModule { }
