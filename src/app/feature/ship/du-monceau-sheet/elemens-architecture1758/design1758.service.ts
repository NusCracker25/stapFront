import { NGXLogger } from 'ngx-logger';
import { Ship } from './../ship';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Design1758Service {
  computeShip(ship: Ship): void {
    this.computeGeneral(ship);
    this.computeLength(ship);
    this.computeWidth(ship);
    this.computeCreux(ship);
    this.computeDifferenceTirantDeau(ship);
    this.computeUplift(ship);
    this.computeQueel(ship);
    this.computeEtrave(ship);
    this.computeBrion(ship);
    this.computeContreQuille(ship);
    this.computeEtambot(ship);
    this.computeLisseDeHourdy(ship);
    this.computeContreEtrave(ship);
    this.computeMarsouin(ship);
    this.computeEtambot(ship);
    this.computeContreEtambot(ship);
    this.computeCourbeEtambot(ship);
    this.computeBarrePremierPont(ship);
    this.computeBarreDArcasse(ship);
    this.computeEstain(ship);
    this.computeAllongeDeCorniere(ship);
    this.computeCouple(ship);
    this.computeCarlingue(ship);
    this.computeCarlingueMats(ship);
    this.computeGuirlande(ship);
    this.computeBordage(ship);
  }

  computeGeneral(ship: Ship): void {
    ship.armamentGuns =
      2 *
      (ship.armamentQuantityB1 +
        ship.armamentQuantityB2 +
        ship.armamentQuantityB3 +
        ship.armamentQuantityD +
        ship.armamentQuantityFF +
        ship.armamentQuantityRF);
  }

  computeLength(ship: Ship): void {
    const lsab = 2;
    const dsab = 3;
    ship.length =
      ship.armamentQuantityB1 * lsab +
      (ship.armamentQuantityB1 - 1 + 2.5 + 1.5) * dsab;
  }

  computeWidth(ship: Ship): void {
    this.logger.info('ship configuration ', ship);
    /* from DHM 1758 p86 */
    if (ship.armamentCaliberB1 === 36) {
      if (ship.armamentQuantityB1 === 16) {
        ship.width = 15.75474;
      } else if (ship.armamentQuantityB1 === 15) {
        ship.width = 14.29296;
      } else if (ship.armamentQuantityB1 === 14) {
        ship.width = 13.96812;
      } else {
        this.logger.error(
          'Must deal with situation with less than 14 caliber 36'
        );
      }
    } else if (ship.armamentCaliberB1 === 24) {
      if (ship.armamentQuantityB1 === 13) {
        ship.width = 13.15602;
      } else {
        this.logger.error(
          'Must deal with situation with less than 14 caliber 24'
        );
      }
    } else if (ship.armamentCaliberB1 === 18) {
      if (ship.armamentQuantityB1 === 12) {
        ship.width = 12.1815;
      } else {
        this.logger.error('Must deal with situation other than 12 caliber 18');
      }
    } else if (ship.rank === 'fregate') {
      if (ship.armamentCaliberB1 === 8 && ship.armamentQuantityB1 === 13) {
        ship.width = 10.07004;
      } else if (
        ship.armamentCaliberB1 === 6 &&
        ship.armamentQuantityB1 === 10
      ) {
        ship.width = 9.09552;
      } else {
        this.logger.error('This fregate configuration is not managed ');
      }
    } else if (ship.rank === 'flute') {
      switch (ship.volume) {
        case 600:
          ship.width = 9.09552;
          break;
        case 400:
          ship.width = 8.121;
          break;
        case 300:
          ship.width = 6.4958;
          break;
        default:
          this.logger.error(
            'this configuration does not exist in DHM 1758: Flute, ',
            ship.volume
          );
          break;
      }
    } else {
      this.logger.error(
        'this armament configuration is not available from DHM 1758'
      );
    }
  }

  computeCreux(ship: Ship): void {
    /* DHM1758; p 93 for most ship Creux is half the width but for the fregates ans smaller ships where speed prevails */
    ship.creux = ship.width / 2;
  }

  computeUplift(ship: Ship): void {
    ship.bwdUplift = (ship.length * 0.005076) / 0.32484; // 2li 3pts per feet of length DHM 1758 p97
    ship.fwdUplift = (ship.bwdUplift * 0.002256) / 0.02707; // 1 li per thumb of backward elevation
  }

  computeDifferenceTirantDeau(ship: Ship): void {
    if(ship.queelL == null){
      this.computeQueel(ship);
    }
    /* DHM 1758 p103: difference de tirant 3 lignes par pied de longeur de la quille" */
    ship.deltaTirant = (ship.queelL * 0.006768) / 0.32484;
  }

  computeQueel(ship: Ship): void {
    /* DHM 1758 p98- 100: élenacment n'est qu'1/12 de la quille" */
    if (ship.armamentGuns >= 60) {
      ship.elancement = ship.length / 12;
    } else if (ship.armamentGuns >= 40) {
      ship.elancement = ship.length / 14;
    } else {
      ship.elancement = ship.length / 15;
    }
    ship.etambotQuete = ship.elancement / 6;

    /* we can deduce from the above the length of the queel */
    ship.queelL = ship.length - ship.elancement - ship.etambotQuete;
    /* hauteur perpendiculaire de la quille est d'1 ligne 6 point par pied de longueur */
    ship.queelH = ship.queelL * 0.003384 / 0.32484;
    /* largeur de la quille est de 10 lignes 8 point par pouce de hauteur */
    ship.queelW = ship.queelH * 0.024064 / 0.02707;
    ship.queelEmpature = ship.queelH * 4;
  }

  computeBrion(ship: Ship): void{
    if (ship.queelH == null || ship.queelL == null || ship.queelW == null ) {
      this.computeQueel(ship);
    }

    // with fully computed queel one can size the ringeot
    ship.brionH = ship.queelH;
    ship.brionWq = ship.queelW; // width when joining the queel
    if (ship.etraveW == null){
      this.computeEtrave(ship);
    }
    ship.brionWe = ship.etraveW; // width when joining the etrave
  }

  computeContreQuille(ship: Ship): void{
    if (ship.queelW == null){
      this.computeQueel(ship);
    }
    ship.contreQuilleW = ship.queelW * 2 / 3;
    ship.contreQuilleT = 0.13535; // thickness for contre quille renfort (is 4 -5 inches depending on rank)
  }

  computeEtrave(ship: Ship): void {
    ship.etraveH = ship.creux + ship.fwdUplift;
    ship.etraveH += ship.deck1H;
    ship.etraveH += ship.tontureBarrotColtis;
    ship.etraveH += ship.deck2BordageT;
    ship.etraveH += ship.deck2H;
    ship.etraveH += ship.deck3BordageT;
    ship.etraveH += 2 * ship.armamentHFeuilletB3;
    // DHM1758 p109: mais le plus sur est d'établir la hauteur de l'étrave sur langle du beaupré (cela requière d'avoir positionné les mats)
    ship.etraveW = ship.queelW; // la largeur de l'étrave est égale à celle de la quille ChI.V. De l'étrave
    ship.etraveT = ship.queelH;
    ship.etraveEmpature = ship.queelH * 4;
  }

  computeContreEtrave(ship: Ship): void {
    if (ship.etraveW == null){
      this.computeEtrave(ship);
    }
    ship.contreEtraveW = ship.etraveW;
    ship.contreEtraveT = ship.etraveT * 2 / 3;
  }

  computeMarsouin(ship: Ship): void{
    // DHM does nothing
  }

  computeEtambot(ship: Ship): void {
    if (ship.queelW == null ){
      this.computeQueel(ship);
    }
    if (ship.deltaTirant == null){
      this.computeDifferenceTirantDeau(ship);
    }
    ship.etambotH = ship.creux;
    ship.etambotH += ship.deltaTirant;
    ship.etambotH += ship.bwdUplift;
    ship.etambotH += ship.deck1BackwardH;
    ship.etambotH += ship.deck2BordageT;
    ship.etambotH -= ship.gouvernailT;
    ship.etambotW = ship.queelW;
    ship.etambotTb = ship.queelH * ( 1 + 0.01128 / 0.02707);
    ship.etambotTh = ship.etambotTb * 2 / 3;
  }

  computeContreEtambot(ship: Ship): void {
    if(ship.etambotW == null){
      this.computeEtambot(ship);
    }
    ship.contreEtambotEnDedansW = ship.etambotW;
    ship.contreEtambotEnDedansLb = ship.etambotTb / 2;
    ship.contreEtambotEnDedansLh = ship.etambotTb / 4;
  }

  computeCourbeEtambot(ship: Ship){
    if( ship.etambotW == null){
      this.computeEtambot(ship);
    }
    ship.courbeEtambotW = ship.etambotW;
  }

  computeBarreDArcasse(ship: Ship): void{
    if (ship.queelW == null){
      this.computeQueel(ship);
    }
    if(ship.lisseHourdyBouge == null){
      this.computeLisseDeHourdy(ship);
    }
    ship.barreDArcasseT = 2 / 3 * ship.queelW;
    ship.barreDArcasseW = 4 / 3 * ship.barreDArcasseT;
    ship.barreDArcasseBv = 0.5 * ship.lisseHourdyBouge;
  }

  computeBarrePremierPont(ship: Ship): void{
    if (ship.queelW == null){
      this.computeQueel(ship);
    }
    // DHM P61 ChI.X
    ship.barrePremierPontW = 0.75 * ship.queelW; // 3/4 largeur de la quille
    ship.barrePremierPontT = 6 / 7 * ship.queelW;
    ship.barrePremierPontBh = ship.lisseHourdyBouge; // bouge un peu moindre que celui de la lisse de hourdy...
    ship.barrePremierPontBv = ship.deck1Bouge; // bouge vertical égal à celui du premier pont
  }

  computeEstain(ship: Ship): void {
    this.logger.info('Compute Estain is to be defined as formula is not explicit in DHM 1758 I.XIV')
    // to be done as estains have the same dimension as varangue
    ship.estainW = 6;
    ship.estainT = 6;
  }

  computeAllongeDeCorniere(ship: Ship): void{
    this.logger.info('no design point available in DHM 1758 for allonge de corniere');
  }

  computeCouple(ship: Ship): void{
    this.computeVarangue(ship);
    this.computeGenou(ship);
    this.computeAllonge(ship);
    this.logger.info('couple are not yet designed');
  }

  computeVarangue(ship: Ship): void{
    this.logger.info( 'varangue are not yet designed');
  }

  computeGenou(ship: Ship): void{
    this.logger.info('genou are not yet designed');
  }

  computeAllonge(ship: Ship): void{
    // DHM 1758, I.XIX , Allonges: l'epaisseur des membre est d'autant de pouce que le 1/4 de la largeur a de pied
    ship.membreT = 1 / 4 * ship.width / 0.32484 * 0.02707;
    ship.allongeDeReversTh = 7 / 8 * ship.membreT;

    this.logger.info('allonges are not yet designed');
  }

  computeCarlingue(ship: Ship): void{
    if(ship.queelW == null){
      this.computeQueel(ship);
    }
    ship.carlingueT = 0.5 * ship.queelH;
    ship.carlingueW = ship.queelW;
  }
  
  computeCarlingueMats(ship: Ship): void{
    this.logger.info('carlingues des mats are not yet designed');
  }

  computeGuirlande(ship: Ship): void{
    this.logger.info('guirlandes are not designed yet');
  }

  computeBordage(ship: Ship): void{
    this.logger.info('no design yet for bordage');
  }

  computeLisseDeHourdy(ship: Ship): void {
    /* DHM1758 p111 */
    ship.lisseHourdyPZ = ship.creux;
    ship.lisseHourdyPZ += ship.bwdUplift;
    ship.lisseHourdyPZ += ship.bwdUplift;
    ship.lisseHourdyPZ += ship.deck1Bouge;
    ship.lisseHourdyPZ += ship.deck1BordageT;
    ship.lisseHourdyPZ += ship.armamentHFeuilletB1;
    ship.lisseHourdyL = (2 / 3) * ship.width;
    ship.lisseHourdyT = (ship.lisseHourdyL * 0.013536) / 0.32484;
    ship.lisseHourdyW = ship.lisseHourdyT;
    ship.lisseHourdyBouge = (ship.lisseHourdyL / 0.32484) * 0.006768;
  }

  constructor(private logger: NGXLogger) {}
}
