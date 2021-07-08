import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsingAngularRoutingModule } from './crud-using-angular-routing.module';
import { CrudUsingAngularComponent } from './crud-using-angular/crud-using-angular.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrudUsingAngularComponent],
  imports: [CommonModule, CrudUsingAngularRoutingModule, FormsModule],
})
export class CrudUsingAngularModule {}
