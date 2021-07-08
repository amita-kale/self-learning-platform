import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsingServiceRoutingModule } from './crud-using-service-routing.module';
import { CrudServiceTableComponent } from './crud-service-table/crud-service-table.component';
import { CrudServiceFormComponent } from './crud-service-form/crud-service-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrudServiceTableComponent, CrudServiceFormComponent],
  imports: [CommonModule, CrudUsingServiceRoutingModule, FormsModule],
})
export class CrudUsingServiceModule {}
