import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudServiceTableComponent } from './crud-service-table/crud-service-table.component';

const routes: Routes = [
  {
    path: 'servicecrud',
    component: CrudServiceTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudUsingServiceRoutingModule {}
