import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsingJsonRoutingModule } from './crud-using-json-routing.module';
import { JsonTableComponent } from './json-table/json-table.component';
import { JsonFormComponent } from './json-form/json-form.component';


@NgModule({
  declarations: [
    JsonTableComponent,
    JsonFormComponent
  ],
  imports: [
    CommonModule,
    CrudUsingJsonRoutingModule
  ]
})
export class CrudUsingJsonModule { }
