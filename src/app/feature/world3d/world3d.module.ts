import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { World3dRoutingModule } from './world3d-routing.module';
import { World3dComponent } from './world3d.component';


@NgModule({
  declarations: [World3dComponent],
  imports: [
    CommonModule,
    World3dRoutingModule
  ]
})
export class World3dModule { }
