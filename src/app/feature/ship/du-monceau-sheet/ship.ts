import { Length } from './length';
export class Ship {
  /* uuid */
  UID: string;
  /* id for the ship */
  name: string;
  rank: string;
  order: string;
  /* shipyard */
  shipyard: string;
  yearBuild: number;
  yearDestruction: number;

  /* general sizes */
  length: number; /* from rablure de l'étrave to rablue de l'étambot */
  width: number;
  creux: number;
  volume: number; /* ship tonnage express in baril (tonneaux)*/

  /* uplift */
  fwdUplift: number;
  bwdUplift: number;

  /* queel */
  elancement: number; // elancement de l'étrave
  hEtrave: number; // height of Etrave
  queteEtambot: number; // quete de l'étambot
  hEtambot: number;
  queelLength: number; // longueur de la quille
  deltaTirant: number; // difference de tirant d'eau

  firstDeck: {
    /* first deck */
    height: number; // height first deck from ground up to floor (below barrot/baud)
    thicknessBordage: number; // thickness of bordage
    hBackwardFirstDeck: number; // distance from first deck to second below the bau
  };

  secondDeck: {
    /* second Deck */
    height: number;
    thicknessBordage: number;
  };
  thirdDeck:{
  /* third Deck */
  height: number;
  thicknessBordage: number;
};
  /* gouvernail */
  tGouvernail: number; /* thickness of gouvernail */

  armament: {
    /* artillery */
    /* 1st battery */
    quantityB1: number; // amount of guns per side
    caliberB1: number; // caliber of guns
    hFeuilletB1: number; // height for the feuillet

    /* 2nd battery */
    quantityB2: number;
    caliberB2: number;
    hFeuilletB2: number;

    /* 3rd battery */
    quantityB3: number;
    caliberB3: number;
    hFeuilletB3: number;
    /* Front fort */
    quantityFF: number;
    caliberFF: number;
    hFeuilletFF: number;
    /* Rear fort */
    quantityRF: number;
    caliberRF: number;
    hFeuilletRF: number;
    /* Dunette */
    quantityD: number;
    caliberD: number;
    hFeuilletD: number;

    /* total armament */
    guns: number;
  };

  crew: {
    total: number;
  };

  geom: {
    tontureBarrotColtis: number;
  };

  BOM:{
    alonges: {
      epDroit: Length;
      largVarangue: Length;
      largPremierPont: Length;
    }; // allonges 1er, 2eme, 3eme, 4eme
    alongesRevers: {
      epDroit: Length;
      largSabord: Length;
      largTour: Length;
    };
    alongesEcubier: {
      carre: Length;
    };
    apotres: {

    };
    alongesPorques: {
      epDroit: Length;
      largVarangue: Length;
      largPremierPont: Length;
    };
    alongeVoutes: {
      // cf montant de voute
    };
    alongeTableau: {
      epDroitBas: Length;
      epHaut: Length;
      largBas: Length;
      largHaut: Length;
    };
    alongeCapucin: {
      ep: Length;
      largBas: Length;
      largHaut: Length;
    };
    brion: {
      epDroit: Length;
      largAngle: Length;
    };
    barreDArcasse: {
      epTour: Length;
      largDroit: Length;
    };
    barreDePont: {
      epTour: Length;
      largMoyen: Length;
    };
    barreDEcusson: {
      epDroit: Length;

    };
    bauxPremierPont: {
      carre: Length;
      bauxFautPont: Length;
    };
    barottinPremierPont: {
      ep: Length;
      larg: Length;
    };
    bauxSecondPont: {
      carre: Length;
    };
    barottinSecondPont: {
      ep: Length;
      larg: Length;
    };
    bauxTroisiemePont: {
      carre: Length;
    };
    barottinTroisiemePont: {
      ep: Length;
      larg: Length;
    };
    bauxGaillard: {
      ep: Length;
      larg: Length;
    };
    barottinGaillard: {
      ep: Length;
      larg: Length;
    };

  }
}
