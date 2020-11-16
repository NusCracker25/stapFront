import { NGXLogger } from 'ngx-logger';
import { Elements1758Service } from './../elemens-architecture1758/elements1758.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Ship } from '../ship';
import { Design1758Service } from '../elemens-architecture1758/design1758.service';

@Component({
  selector: 'stap-design-sheet',
  templateUrl: './design-sheet.component.html',
  styleUrls: ['./design-sheet.component.scss']
})
export class DesignSheetComponent implements OnInit {
  shipForm = this.fb.group({
    name: [null, Validators.required],
    rank: [null, Validators.required],
    order: [null, Validators.required],

    caliber1: [null, Validators.required],
    caliber2: [null, Validators.required],
    caliber3: [null, Validators.required],
    caliberRF: [null, Validators.required],
    caliberFF: [null, Validators.required],
    caliberD: [null, Validators.required],
    nCaliber1: [null, Validators.required],
    nCaliber2: [null, Validators.required],
    nCaliber3: [null, Validators.required],
    nCaliberRF: [null, Validators.required],
    nCaliberFF: [null, Validators.required],
    nCaliberD: [null, Validators.required],

    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ]
  });

  ship: Ship;
  specSheet: boolean;

  hasUnitNumber = false;

ranks = [
  { name: 'Premier Rang', abbreviation: '1er Rang'},
  { name: 'Second Rang', abbreviation: '2nd Rang'},
  { name: 'Troisième Rang', abbreviation: '3eme Rang'},
  { name: 'Quatrième Rang', abbreviation: '4eme Rang'},
  { name: 'Fregate', abbreviation: 'Frégate'},
  { name: 'Corvette', abbreviation: 'Corvette'}
];

orders = [
  { name: 'Premier Ordre', abbreviation: '1er Ordre'},
  { name: 'Second Ordre', abbreviation: '2nd Ordre'},
  { name: 'Troisième Ordre', abbreviation: '3eme Ordre'},
  { name: 'Quatrième Ordre', abbreviation: '4eme Ordre'},
];

canonCaliber = [
  { name: '48'},
  { name: '36'},
  { name: '24'},
  { name: '18'},
  { name: '12'},
  { name: '8'},
  { name: '6'},
  { name: '4'}
];

  constructor(
    private fb: FormBuilder,
    private dhm1758: Elements1758Service,
    private design1758: Design1758Service,
    private logger: NGXLogger
    ) {}

  ngOnInit(): void{
    this.specSheet = false;
    this.ship = new Ship();
  }

  onSubmit() {

    this.ship.name = this.shipForm.value.name;
    this.ship.rank = this.shipForm.value.rank;
    this.ship.order = this.shipForm.value.order;

    // this.ship.armament.caliberB1 = this.shipForm.value.caliber1;
    this.ship.armamentCaliberB1 = parseInt(this.shipForm.value.caliber1 , 10);
    this.ship.armamentQuantityB1 = this.shipForm.value.nCaliber1;

    this.ship.armamentCaliberB2 = parseInt(this.shipForm.value.caliber2, 10);
    this.ship.armamentQuantityB2 = this.shipForm.value.nCaliber2;

    this.ship.armamentCaliberB3 = parseInt(this.shipForm.value.caliber3, 10);
    this.ship.armamentQuantityB3 = this.shipForm.value.nCaliber3;

    this.ship.armamentCaliberRF = parseInt(this.shipForm.value.caliberRF, 10);
    this.ship.armamentQuantityRF = this.shipForm.value.nCaliberRF;

    this.ship.armamentCaliberFF = parseInt(this.shipForm.value.caliberFF, 10);
    this.ship.armamentQuantityFF = this.shipForm.value.nCaliberFF;

    this.ship.armamentCaliberD = parseInt(this.shipForm.value.caliberD, 10);
    this.ship.armamentQuantityD = this.shipForm.value.nCaliberD;

    this.design1758.computeShip(this.ship);
    this.specSheet = true;
}

}
