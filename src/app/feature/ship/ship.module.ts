
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipRoutingModule } from './ship-routing.module';
import { ShipComponent } from './ship/ship.component';
import { VirtualShipComponent } from './virtual-ship/virtual-ship.component';
import { DesignSheetComponent } from './du-monceau-sheet/design-sheet/design-sheet.component';
import { UiComponent } from './virtual-ship/ui/ui.component';
import { UiInfobarTopComponent } from './virtual-ship/ui/ui-infobar-top/ui-infobar-top.component';
import { UiInfobarRightComponent } from './virtual-ship/ui/ui-infobar-right/ui-infobar-right.component';
import { UiInfobarLeftComponent } from './virtual-ship/ui/ui-infobar-left/ui-infobar-left.component';
import { UiInfobarBottomComponent } from './virtual-ship/ui/ui-infobar-bottom/ui-infobar-bottom.component';

import { WindowRefService } from './virtual-ship/services/window-ref.service';
import { LengthConverterService } from './services/length-converter.service';

import { EngineBBLComponent } from './virtual-ship/engine-bbl/engine-bbl.component';
import { GlossaryShipComponent } from './du-monceau-sheet/glossary-ship/glossary-ship.component';
import { ElemensArchitecture1758Component } from './du-monceau-sheet/elemens-architecture1758/elemens-architecture1758.component';
import { DuMonceauSheetComponent } from './du-monceau-sheet/du-monceau-sheet.component';

@NgModule({
  providers: [
    WindowRefService,
    LengthConverterService
  ],
  imports: [
    CommonModule,
    ShipRoutingModule,
    SharedModule
  ],
  declarations: [
    ShipComponent,
    VirtualShipComponent,
    DesignSheetComponent,
    UiComponent,
    UiInfobarBottomComponent,
    UiInfobarLeftComponent,
    UiInfobarRightComponent,
    UiInfobarTopComponent,
    EngineBBLComponent,
    GlossaryShipComponent,
    ElemensArchitecture1758Component,
    DuMonceauSheetComponent
  ]

})
export class ShipModule { }
