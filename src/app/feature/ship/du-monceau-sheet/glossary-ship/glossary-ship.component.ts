import { Component, OnInit } from '@angular/core';

import {glossary} from './glossary';

@Component({
  selector: 'stap-glossary-ship',
  templateUrl: './glossary-ship.component.html',
  styleUrls: ['./glossary-ship.component.scss']
})
export class GlossaryShipComponent implements OnInit {

  panelOpenState = false;

  themes = {
    CLASS: 'Classification',
    MAST: 'Mast',
    COQUE: 'Coque',
    ARTILLERY: 'Artillery'
  };

  terms = glossary.ddm;

  constructor() { }

  ngOnInit(): void {
  }


}
