import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  },
  // {
  //   path : '',
  //   redirectTo: 'home',
  //   pathMatch : 'full'
  // },
  // {
  //   path: '404',
  //   component: NotFoundComponent
  // },
  {
    path: '**',
    redirectTo: 'home'
    // component: NotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
