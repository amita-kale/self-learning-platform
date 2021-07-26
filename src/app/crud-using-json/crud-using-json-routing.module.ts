import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonFormComponent } from './json-form/json-form.component';
import { JsonTableComponent } from './json-table/json-table.component';

const routes: Routes = [
  {
    path: 'table',
    component: JsonTableComponent,
  },
  {
    path: 'form',
    component: JsonFormComponent,
  },
  {
    path: 'form/:id',
    component: JsonFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudUsingJsonRoutingModule {}
