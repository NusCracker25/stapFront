import { HomeComponent } from './home/home.component';
import { StrapComponent } from './strap/strap.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StrapComponent,
     children: [
       {
         path: 'home',
         component: HomeComponent
       },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
      }
    ]
  }
]; // end of routes

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
