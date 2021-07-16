import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudDiffModule2RoutingModule } from './crud-diff-module2-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, CrudDiffModule2RoutingModule, FormsModule],
})
export class CrudDiffModule2Module {}
