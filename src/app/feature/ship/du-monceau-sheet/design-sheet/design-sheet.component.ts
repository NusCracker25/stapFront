import { NGXLogger } from 'ngx-logger';
import { Elements1758Service } from './../elemens-architecture1758/elements1758.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Ship } from '../ship';

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

    this.ship.caliberB1 = this.shipForm.value.caliber1;
    this.ship.quantityB1 = this.shipForm.value.nCaliber1;

    this.ship.caliberB2 = this.shipForm.value.caliber2;
    this.ship.quantityB2 = this.shipForm.value.nCaliber2;

    this.ship.caliberB3 = this.shipForm.value.caliber3;
    this.ship.quantityB3 = this.shipForm.value.nCaliber3;

    this.ship.caliberRF = this.shipForm.value.caliberRF;
    this.ship.quantityRF = this.shipForm.value.nCaliberRF;

    this.ship.caliberFF = this.shipForm.value.caliberFF;
    this.ship.quantityFF = this.shipForm.value.nCaliberFF;

    this.ship.caliberD = this.shipForm.value.caliberD;
    this.ship.quantityD = this.shipForm.value.nCaliberD;

    this.computeShip();
    this.specSheet = true;
}

computeShip(): void{
  this.computeLength();
  this.computeWidth();
  this.computeCreux();
}

  computeLength(): void{
    const lsab = 2;
    const dsab = 3;
    this.ship.length = this.ship.quantityB1 * lsab + (this.ship.quantityB1 - 1 + 2.5 + 1.5 ) * dsab;
  }

  computeWidth(): void{
    /* from DHM 1758 p86 */
    if ( this.ship.caliberB1 === 36 ){
      if (this.ship.quantityB1 === 16){
        this.ship.width = 15.75474;
      } else if (this.ship.quantityB1 === 15){
        this.ship.width = 14.29296;
      } else if (this.ship.quantityB1 === 14){
        this.ship.width = 13.96812;
      }
      else {
        this.logger.error('Must deal with situation with less than 14 caliber 36');
      }

    } else if (this.ship.caliberB1 === 24){
      if (this.ship.quantityB1 === 13) {
        this.ship.width = 13.15602;
      }
      else {
        this.logger.error('Must deal with situation with less than 14 caliber 24');
      }
    } else if (this.ship.caliberB1 === 18){
      if (this.ship.quantityB1 === 12) {
        this.ship.width = 12.1815;
      }
      else {
        this.logger.error('Must deal with situation other than 12 caliber 18');
      }
    } else if (this.ship.rank === 'fregate'){
      if (this.ship.caliberB1 === 8 && (this.ship.quantityB1 === 13)){
        this.ship.width = 10.07004;
      } else if (this.ship.caliberB1 === 6 && (this.ship.quantityB1 === 10)){
        this.ship.width = 9.09552;
      }
      else {
        this.logger.error('This fregate configuration is not managed ');
      }

    } else if (this.ship.rank === 'flute'){
      switch (this.ship.volume){
        case 600:
          this.ship.width = 9.09552;
          break;
        case 400:
          this.ship.width = 8.121;
          break;
        case 300:
          this.ship.width = 6.4958;
          break;
        default:
          this.logger.error('this configuration does not exist in DHM 1758: Flute, ',this.ship.volume);
          break;
       }
    }
    else{
      this.logger.error('this armament configuration is not available from DHM 1758')
    }
  }

computeCreux(): void{

}
}
