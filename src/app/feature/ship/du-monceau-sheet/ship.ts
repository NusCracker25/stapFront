import { NumberValueAccessor } from '@angular/forms';
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

  queelL: number; // longueur de la quille
  deltaTirant: number; // difference de tirant d'eau
  queelH: number; // height of queel (vertical to water line)
  queelW: number; // width of queel
  queelEmpature: number;

  brionH: number; // height for brion
  brionWq: number; // width when joining the queel
  brionWe: number; // height when joining the etrave

  contreQuilleW: number;
  contreQuilleT: number;
  fausseQuilleT: number;
  fausseQuilleW: number;

  etraveEmpature: number;
  etraveH: number; // height of the etrave
  etraveW: number;
  etraveT: number; // thickness of the etrave

  contreEtraveW: number; // width of contre Etrave
  contreEtraveT: number; // thickness of contre etrave

  etambotQuete: number; // quete de l'étambot
  etambotH: number;
  etambotW: number;
  etambotTb: number;
  etambotTh: number;

  contreEtambotEnDedansW: number;
  contreEtambotEnDedansLb: number;
  contreEtambotEnDedansLh: number;

  courbeEtambotW: number;

  barrePremierPontW: number;
  barrePremierPontT: number;
  barrePremierPontBh: number;
  barrePremierPontBv: number;

  barreDArcasseW: number;
  barreDArcasseT: number;
  barreDArcasseBv: number;

  estainW: number;
  estainT: number;

  membreT: number;

  carlingueT: number;
  carlingueW : number;

  allongeDeReversTh: number;
  /* artillery */
  /* 1st battery */
  armamentQuantityB1: number; // amount of guns per side
  armamentCaliberB1: number; // caliber of guns
  armamentHFeuilletB1: number; // height for the feuillet

  /* 2nd battery */
  armamentQuantityB2: number;
  armamentCaliberB2: number;
  armamentHFeuilletB2: number;

  /* 3rd battery */
  armamentQuantityB3: number;
  armamentCaliberB3: number;
  armamentHFeuilletB3: number;
  /* Front fort */
  armamentQuantityFF: number;
  armamentCaliberFF: number;
  armamentHFeuilletFF: number;
  /* Rear fort */
  armamentQuantityRF: number;
  armamentCaliberRF: number;
  armamentHFeuilletRF: number;
  /* Dunette */
  armamentQuantityD: number;
  armamentCaliberD: number;
  armamentHFeuilletD: number;

  /* total armament */
  armamentGuns: number;

  /* first deck */
  deck1H: number; // height first deck from ground up to floor (below barrot/baud)
  deck1BordageT: number; // thickness of bordage
  deck1BackwardH: number; // distance from first deck to second below the bau
  deck1Bouge: number;

  /* second Deck */
  deck2H: number;
  deck2BordageT: number;

  /* third Deck */
  deck3H: number;
  deck3BordageT: number;

  /* gouvernail */
  gouvernailT: number; /* thickness of gouvernail */

  crewTotal: number;

  tontureBarrotColtis: number;

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
  apotres: {};
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
  barrotDunette: {
    ep: Length;
    larg: Length;
  };
  barrotChambreDunette: {
    ep: Length;
    larg;
    Length;
  };
  barrotFosseAuxLions: {
    ep: Length;
    larg;
    Length;
  };
  barrotinFosseAuxLions: {
    ep: Length;
    larg;
    Length;
  };
  barrotPlateformePain: {
    ep: Length;
    larg;
    Length;
  };
  barrotPlateformePoudres: {
    ep: Length;
    larg;
    Length;
  };
  barrotPlateformeCables: {
    ep: Length;
    larg;
    Length;
  };
  barrotClefDeBeaupre: {
    ep: Length;
    larg;
    Length;
  };
  barrotPlateformePoulaine: {
    ep: Length;
    larg;
    Length;
  };
  bittePremiereSeconde: {
    ep: Length;
    larg;
    Length;
  };
  bittonDeHuneDeGrandHunier: {
    grosseur: Length;
  };
  bittonDeHuneDePetitHunier: {
    grosseur: Length;
  };
  bossoir: {
    ep: Length;
    larg;
    Length;
  };
  batayoles: {
    ep: Length;
    larg;
    Length;
  };
  bordageDeFond: {
    ep: Length;
    larg: Length;
  };
  bordageDessousViruresSerreBauquieres: {
    ep: Length;
    larg: Length;
  };
  bordagePremierPont: {
    ep: Length;
    larg: Length;
  };
  bordageHiloiresDuMilieuPremierPont: {
    ep: Length;
    larg: Length;
  };
  bordageSecondPont: {
    ep: Length;
    larg: Length;
  };
  bordageHiloireDuMilieurDeuxiemePont: {
    ep: Length;
  };
  bordageTroisiemePont: {
    ep: Length;
    larg: Length;
  };
  bordageHiloireDuMilieuTroisiemePont: {
    ep: Length;
  };
  bordageGaillards: {
    ep: Length;
    larg: Length;
  };
  bordageHiloireDuMilieuGaillard: {
    ep: Length;
  };
  bordageDunette: {
    ep: Length;
    larg: Length;
  };
  bordagePlateFormeVivre: {
    ep: Length;
    larg: Length;
  };
  bordageFosseAuxLions: {
    ep: Length;
    larg: Length;
  };
  bordagePlateFormeAuxPains: {
    ep: Length;
    larg: Length;
  };
  bordagePlateFormeAuxPoudres: {
    ep: Length;
    larg: Length;
  };
  bordagePlateFormeAuxCables: {
    ep: Length;
    larg: Length;
  };
  bordagePlateFormePoulaine: {
    ep: Length;
    larg: Length;
  };
  bordageCotePremiereBatterie: {
    ep: Length;
    larg: Length;
  };
  bordageCoteDeuxiemeBatterie: {
    ep: Length;
    larg: Length;
  };
  bordageCoteTroisiemeBatterie: {
    ep: Length;
    larg: Length;
  };
  bordageCoteGaillards: {
    ep: Length;
    larg: Length;
  };
  bordageCoteDunette: {
    ep: Length;
    larg: Length;
  };
  bordageQuilleFauxPonts: {
    ep: Length;
    larg: Length;
  };
  bordageDessousPremierePreceinte: {
    ep: Length;
    larg: Length;
  };
  bordageDeuxiemeATroisiemePreceinte: {
    ep: Length;
    larg: Length;
  };
  bordageQuatriemeACinquiemePreceinte: {
    ep: Length;
    larg: Length;
  };
  bordageSixiemeASeptiemePreceinte: {
    ep: Length;
    larg: Length;
  };
  bordagePremiereRabattueAPlatBord: {
    ep: Length;
    larg: Length;
  };
  bordageEntrePremiereRabattueEtPlatBord: {
    ep: Length;
    larg: Length;
  };
  bordageEntrePremiereEtSecondeRabattue: {
    ep: Length;
    larg: Length;
  };
  bordageEntreSecondeEtTroisiemeRabattue: {
    ep: Length;
    larg: Length;
  };
  boudinLisseSuperieureEtInferieureEperon: {
    ep: Length;
    larg: Length;
  };

  barreDuGrandCabestan: {
    carreGrosBout: Length;
    carrePetitBout: Length;
  };
  barreDuPetitCabestan: {
    carreGrosBout: Length;
    carrePetitBout: Length;
  };
  barreDuGouvernail: {
    carreGrosBout: Length;
    carrePetitBout: Length;
  };
  contreQuilleEnDedans: {
    ep: Length;
    larg: Length;
  };
  contreEtrave: {
    larg_tour: Length;
  };
  contreEtambotEnDedans: {
    larg_bas: Length;
    larg_haut: Length;
    ep: Length;
  };
  contreEtambotEnDehors: {
    larg: Length;
    ep_bas: Length;
    ep_haut: Length;
  };
  courbeEtambot: {
    ep: Length;
    larg_1_3_collet: Length;
  };
  carlingue: {
    ep: Length;
    larg: Length;
  };
  corniere: {
    ep_droit: Length;
    larg_pied: Length;
    lar_haut: Length;
  };
  contreCorniere: {
    ep_droit: Length;
    lar_haut: Length;
    larg_bas: Length;
  };
  courbePremierPont: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeFauxPont: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeScondPont: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeTroisiemePont: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeGaillard: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeDunette: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeLisseHourdy: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeBarreDArcasse: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeEcusson: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeBossoir: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeCapucine: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbePasseAvant: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeGatte: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeFrontauxGaillard: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbeEperon: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  courbePorteAubans: {
    ep_droit: Length;
    lar_1_3_collet: Length;
  };
  coussinDesBittes: {
    ep: Length;
    larg: Length;
  };
  cornicheAuSecondPont: {
    ep: Length;
    larg: Length;
  };
  cornicheAppuiPetiteVoute: {
    ep: Length;
    larg: Length;
  };
  cornicheAppuiGalerieInférieure: {
    ep: Length;
    larg: Length;
  };
  cornicheAppuiGalerieSuperieure: {
    ep: Length;
    larg: Length;
  };
  cabrion: {
    grosseur_en_carre: Length;
  };
  grandCabestan: {
    diam_premier_pont: Length;
    diam_second_pont: Length;
  };
  petitCabestan: {
    diametre: Length;
  };
  digon: {
    ep_bas_etrave: Length;
    ep_haut: Length;
  };
  defenses: {
    ep: Length;
    larg: Length;
  };
  dogueDAinure: {
    ep: Length;
    larg: Length;
  };
  demiLune: {
    ep: Length;
    larg: Length;
  };
  entrePontPremierAuSecond: {
    hauteur_sous_baux_premiere_hiloire: Length;
    hauteur_en_arriere_premiere_hiloire: Length;
    hauteur_en_avant: Length;
  };
  entrePontSecondAuTroisieme: {
    hauteur_sous_baux_premiere_hiloire: Length;
    hauteur_en_arriere: Length;
  };
  entrePontTroisiemeSecondPointGaillardArriere: {
    hauteur_sous_baux_premiere_hiloire_front_gaillard: Length;
    hauteur_arriere: Length;
  };
  entrePontTroisiemeSecondPontGaillardAvant: {
    hauteur_sous_baux_entree_front_gaillard: Length;
    hauteur_avant_entree_eperon: Length;
  };
  entrepontGaillardDunette: {
    hauteur_entree_dunette_sous_barreaux_premiere_hiloire: Length;
    hauteur_arriere: Length;
  };
  etrave: {
    ep: Length;
    larg: Length;
  };
  etambot: {
    ep: Length;
    larg: Length;
  };
  eguillettesPorques: {
    ep: Length;
    larg: Length;
  };
  epontillesDescenteCalle: {
    grosseur_carre: Length;
  };
  entremiseGoutiere: {
    ep: Length;
    larg: Length;
  };
  fourcats: {
    ep: Length;
    larg: Length;
  };

  /* lisse de Hourdy */
  lisseHourdyW: number;
  lisseHourdyL: number;
  lisseHourdyBouge: number;
  lisseHourdyT: number;
  lisseHourdyPZ: number;
}
