
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
import { ShipsComponent } from './du-monceau-sheet/ships/ships.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NewPeopleComponent } from './people/new-people/new-people.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { PeopleOverviewComponent } from './people/people-overview/people-overview.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { BookOverviewComponent } from './bibliography/book-overview/book-overview.component';
import { NewBookComponent } from './bibliography/new-book/new-book.component';
import { NewTermComponent } from './glossary/new-term/new-term.component';
import { TermOverviewComponent } from './glossary/term-overview/term-overview.component';
import { TermTableComponent } from './glossary/term-table/term-table.component';
import { ShipTableComponent } from './harbor/ship-table/ship-table.component';
import { ShipOverviewComponent } from './harbor/ship-overview/ship-overview.component';
import { NewShipComponent } from './harbor/new-ship/new-ship.component';
import { AllPeopleComponent } from './people/all-people/all-people.component';
import { PeopleIdComponent } from './people/people-id/people-id.component';


@NgModule({
  providers: [
    WindowRefService,
    LengthConverterService
  ],
  imports: [
    CommonModule,
    ShipRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule
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
    DuMonceauSheetComponent,
    ShipsComponent,
    NewPeopleComponent,
    PeopleOverviewComponent,
    BookOverviewComponent,
    NewBookComponent,
    NewTermComponent,
    TermOverviewComponent,
    TermTableComponent,
    ShipTableComponent,
    ShipOverviewComponent,
    NewShipComponent,
    AllPeopleComponent,
    PeopleIdComponent
  ]

})
export class ShipModule { }
