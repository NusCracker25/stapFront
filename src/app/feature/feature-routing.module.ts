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
      },
      {
        path: 'world3d',
        loadChildren: () => import('./world3d/world3d.module').then(m => m.World3dModule)
      },
      {
        path: 'ship',
        loadChildren: () => import('./ship/ship.module').then(m => m.ShipModule)
      }
    ]
  }
]; // end of routes

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
