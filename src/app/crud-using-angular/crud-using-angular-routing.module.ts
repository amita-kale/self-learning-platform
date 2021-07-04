import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUsingAngularComponent } from './crud-using-angular/crud-using-angular.component';

const routes: Routes = [
  {
    path: 'angularcrud',
    component: CrudUsingAngularComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudUsingAngularRoutingModule {}
