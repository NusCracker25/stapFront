import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard',
    component: TodoDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: TodoDashboardComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
