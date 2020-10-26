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

    this.ship.armament.caliberB1 = this.shipForm.value.caliber1;
    this.ship.armament.quantityB1 = this.shipForm.value.nCaliber1;

    this.ship.armament.caliberB2 = this.shipForm.value.caliber2;
    this.ship.armament.quantityB2 = this.shipForm.value.nCaliber2;

    this.ship.armament.caliberB3 = this.shipForm.value.caliber3;
    this.ship.armament.quantityB3 = this.shipForm.value.nCaliber3;

    this.ship.armament.caliberRF = this.shipForm.value.caliberRF;
    this.ship.armament.quantityRF = this.shipForm.value.nCaliberRF;

    this.ship.armament.caliberFF = this.shipForm.value.caliberFF;
    this.ship.armament.quantityFF = this.shipForm.value.nCaliberFF;

    this.ship.caliberD = this.shipForm.value.caliberD;
    this.ship.quantityD = this.shipForm.value.nCaliberD;

    this.computeShip();
    this.specSheet = true;
}

computeShip(): void{
  this.computeGeneral();
  this.computeLength();
  this.computeWidth();
  this.computeCreux();
  this.computeUplift();
  this.computeQueel();
}

computeGeneral(): void{
  this.ship.armament.guns =
   2 * (
     this.ship.armament.quantityB1
     + this.ship.armament.quantityB2
     + this.ship.armament.quantityB3
     + this.ship.armament.quantityD
     + this.ship.armament.quantityFF
     + this.ship.armament.quantityRF
   );
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
  /* DHM1758; p 93 for most ship Creux is half the width but for the fregates ans smaller ships where speed prevails */
  this.ship.creux = this.ship.width / 2;
}

computeUplift(): void{
  this.ship.bwdUplift = this.ship.length * 0.005076 / 0.32484; // 2li 3pts per feet of length DHM 1758 p97
  this.ship.fwdUplift = this.ship.bwdUplift * 0.002256 / 0.02707 ; // 1 li per thumb of backward elevation
}

computeQueel(): void{
 /* DHM 1758 p98- 100: élenacment n'est qu'1/12 de la quille" */
 if ( this.ship.guns >= 60){
   this.ship.elancement = this.ship.length / 12;
 } else if ( this.ship.guns >= 40){
   this.ship.elancement = this.ship.length / 14;
 } else {
  this.ship.elancement = this.ship.length / 15;
 }
 this.ship.queteEtambot = this.ship.elancement / 6;

 /* we can deduce from the above the length of the queel */
 this.ship.queelLength = this.ship.length - this.ship.elancement - this.ship.queteEtambot;
}

computeDifferenceTirantDeau(): void{
  /* DHM 1758 p103: difference de tirant 3 lignes par pied de longeur de la quille" */
  this.ship.deltaTirant = this.ship.queelLength * 0.006768 / 0.32484 ;
}

computeHEtrave(): void{
  this.ship.hEtrave = this.ship.creux + this.ship.fwdUplift;
  this.ship.hEtrave += this.ship.firstDeck.height;
  this.ship.hEtrave += this.ship.geom.tontureBarrotColtis;
  this.ship.hEtrave += this.ship.secondDeck.thicknessBordage;
  this.ship.hEtrave += this.ship.secondDeck.height;
  this.ship.hEtrave += this.ship.tBordageThirdDeck;
  this.ship.hEtrave += 2 * this.ship.armament.hFeuilletB3;
  // DHM1758 p109: mais le plus sur est d'établir la hauteur de l'étrave sur langle du beaupré (cela requière d'avoir positionné les mats)
}

computeEtambot(): void{
  this.ship.hEtambot = this.ship.creux;
  this.ship.hEtambot += this.ship.deltaTirant;
  this.ship.hEtambot += this.ship.bwdUplift;
  this.ship.hEtambot += this.ship.firstDeck.hBackwardFirstDeck;
  this.ship.hEtambot += this.ship.secondDeck.thicknessBordage;
  this.ship.hEtambot -= this.ship.tGouvernail;
}

computeLisseDeHourdy(): void{
  /* DHM1758 p111 */
  this.ship.lisseHourdy.pZ = this.ship.creux;
  this.ship.lisseHourdy.pZ += this.ship.bwdUplift;
  this.ship.lisseHourdy.pZ += this.ship.firstDeck.bouge;
  this.ship.lisseHourdy.pZ += this.ship.firstDeck.thicknessBordage;
  this.ship.lisseHourdy.pZ += this.ship.firstBattery.hFeuillet;
  this.ship.lisseHourdy.length = 2 / 3 * this.ship.width;
  this.ship.lisseHourdy.thickness = this.ship.lisseHourdy.length * 0.013536/0.32484;
  this.ship.lisseHourdy.width = this.ship.lisseHourdy.thickness;
  this.ship.lisseHourdy.bouge = this.ship.lisseHourdy.length / 0.32484 * 0.006768;
}
}
