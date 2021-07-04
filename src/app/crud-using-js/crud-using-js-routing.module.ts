import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUsingJSComponent } from './crud-using-js/crud-using-js.component';

const routes: Routes = [
  {
    path: 'jscrud',
    component: CrudUsingJSComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudUsingJSRoutingModule {}
