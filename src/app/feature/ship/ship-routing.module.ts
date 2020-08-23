import { VirtualShipComponent } from './virtual-ship/virtual-ship.component';
import { ShipComponent } from './ship/ship.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuMonceauSheetComponent } from './du-monceau-sheet/du-monceau-sheet.component';


const routes: Routes = [
  { path: '', component: ShipComponent },
  { path: 'duMonceauSheet', component: DuMonceauSheetComponent },
  { path: 'vrShip', component: VirtualShipComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipRoutingModule { }
