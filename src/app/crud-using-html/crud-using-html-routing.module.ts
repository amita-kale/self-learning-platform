import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUsingHTMLComponent } from './crud-using-html/crud-using-html.component';

const routes: Routes = [
  {
    path: 'htmlcrud',
    component: CrudUsingHTMLComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudUsingHTMLRoutingModule {}
