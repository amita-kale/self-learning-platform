import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudServiceFormComponent } from './crud-service-form/crud-service-form.component';
import { CrudServiceTableComponent } from './crud-service-table/crud-service-table.component';

const routes: Routes = [
  {
    path: 'servicecrud',
    component: CrudServiceTableComponent,
  },
  {
    path: 'serviceform',
    component: CrudServiceFormComponent,
  },
  {
    path: 'serviceform/:ui', //ui is random variable you can take anything...and : for make this variable dynamic.
    component: CrudServiceFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudUsingServiceRoutingModule {}
