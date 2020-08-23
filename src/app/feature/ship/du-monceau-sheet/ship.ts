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

  /* artillery */
  /* 1st battery */
  quantityB1: number;
  caliberB1: number;

  /* 2nd battery */
  quantityB2: number;
  caliberB2: number;

  /* 3rd battery */
  quantityB3: number;
  caliberB3: number;
 /* Front fort */
 quantityFF: number;
 caliberFF: number;
 /* Rear fort */
 quantityRF: number;
 caliberRF: number;
 /* Dunette */
 quantityD: number;
 caliberD: number;


}
