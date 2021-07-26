import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsingJsonRoutingModule } from './crud-using-json-routing.module';
import { JsonTableComponent } from './json-table/json-table.component';
import { JsonFormComponent } from './json-form/json-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [JsonTableComponent, JsonFormComponent],
  imports: [CommonModule, CrudUsingJsonRoutingModule, FormsModule],
})
export class CrudUsingJsonModule {}
