import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudDiffModule1RoutingModule } from './crud-diff-module1-routing.module';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, CrudDiffModule1RoutingModule, FormsModule],
})
export class CrudDiffModule1Module {}
