import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsingServiceRoutingModule } from './crud-using-service-routing.module';
import { CrudServiceTableComponent } from './crud-service-table/crud-service-table.component';
import { CrudServiceFormComponent } from './crud-service-form/crud-service-form.component';


@NgModule({
  declarations: [
    CrudServiceTableComponent,
    CrudServiceFormComponent
  ],
  imports: [
    CommonModule,
    CrudUsingServiceRoutingModule
  ]
})
export class CrudUsingServiceModule { }
