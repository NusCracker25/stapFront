import { NewBookComponent } from './bibliography/new-book/new-book.component';
import { PeopleIdComponent } from './people/people-id/people-id.component';
import { NewShipComponent } from './harbor/new-ship/new-ship.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookOverviewComponent } from './bibliography/book-overview/book-overview.component';
import { TermOverviewComponent } from './glossary/term-overview/term-overview.component';
import { PeopleOverviewComponent } from './people/people-overview/people-overview.component';
import { VirtualShipComponent } from './virtual-ship/virtual-ship.component';
import { ShipComponent } from './ship/ship.component';
import { DuMonceauSheetComponent } from './du-monceau-sheet/du-monceau-sheet.component';
import { ShipOverviewComponent } from './harbor/ship-overview/ship-overview.component';
import { NewPeopleComponent } from './people/new-people/new-people.component';


const routes: Routes = [
  { path: '', component: ShipComponent },
  { path: 'duMonceauSheet', component: DuMonceauSheetComponent },
  { path: 'vrShip', component: VirtualShipComponent },
  // ships
  { path: 'harbor', component: ShipOverviewComponent },
  {
    path: 'ship/:id',
    component: PeopleIdComponent
  },
  { path: 'add_ship', component: NewShipComponent },
  //people
  { path: 'people', component: PeopleOverviewComponent },
  { path: 'add_people', component: NewPeopleComponent },
  {
    path: 'people/:id',
    component: PeopleIdComponent
  },
  // terminology
  {
    path: 'term/:id',
    component: PeopleIdComponent
  },
  { path: 'glossary', component: TermOverviewComponent },
  { path: 'add_term', component: NewShipComponent },

  // books
  { path: 'add_book', component: NewBookComponent },
  {
    path: 'book/:id',
    component: PeopleIdComponent
  },
  { path: 'bibliography', component: BookOverviewComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipRoutingModule { }
