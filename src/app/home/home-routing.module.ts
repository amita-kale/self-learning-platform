import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUsingHTMLComponent } from '../crud-using-html/crud-using-html/crud-using-html.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'html/htmlcrud',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'html',
        loadChildren: () =>
          import('../crud-using-html/crud-using-html.module').then(
            (m) => m.CrudUsingHTMLModule
          ),
      },
      {
        path: 'js',
        loadChildren: () =>
          import('../crud-using-js/crud-using-js.module').then(
            (m) => m.CrudUsingJSModule
          ),
      },
      {
        path: 'angular',
        loadChildren: () =>
          import('../crud-using-angular/crud-using-angular.module').then(
            (m) => m.CrudUsingAngularModule
          ),
      },
      {
        path: 'service',
        loadChildren: () =>
          import('../crud-using-service/crud-using-service.module').then(
            (m) => m.CrudUsingServiceModule
          ),
      },

      {
        path: 'diff-module-service',
        loadChildren: () =>
          import('../crud-diff-module1/crud-diff-module1.module').then(
            (m) => m.CrudDiffModule1Module
          ),
      },
      {
        path: 'diff-module-service-form',
        loadChildren: () =>
          import('../crud-diff-module2/crud-diff-module2.module').then(
            (m) => m.CrudDiffModule2Module
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
