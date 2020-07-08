import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { World3dComponent } from './world3d.component';

const routes: Routes = [{ path: '', component: World3dComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class World3dRoutingModule { }
