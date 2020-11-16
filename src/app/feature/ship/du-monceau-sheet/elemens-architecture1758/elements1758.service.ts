import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Elements1758Service {

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
    { name: '48', // identifiant du calibre
      sabord :{ // geometry for sabord
        W: 1.05573, // width
        H: 0.92038, // height
        dsab: 2.49044, // distance between sabord
        hfeuillet:{ // distance from ground to sabord
          B1: 0.70382 // when @1st battery
        }
      }
    },
    { name: '36',
      sabord : {
        W: 1.00159,
        H: 0.86624,
        dsab: {
          min: 2.46337,
          max: 2.49044
        },
        hfeuillet: {
            B1: 0.70382
        }
      }
    },
    { name: '24',
      sabord : {
        W: 0.92038,
        H: 0.78503,
        dsab:{
          min: 2.32802,
          max: 2.35509
        },
        hfeuillet:{
          B1: 0.67675,
          B2: 0.64968,
        }
      }
    },
    { name: '18',
    sabord : {
      W: 0.86624,
      H: 0.75796,
      dsab: {
        min: 2.21974,
        max: 2.32802
      },
      hfeuillet: {
        B1: 0.62261,
        B2: 0.5414,
      }
    }
  },
  { name: '12',
    sabord : {
      W: 0.75796,
      H: 0.70382,
      dsab: {
        min: 2.11146,
        max: 2.35509
      },
      hfeuillet: {
        B1: 0.59554,
        B2: 0.48726,
        B3: 0.46019
      }
    }
  },
    { name: '8',
    sabord : {
      W: 0.73089,
      H: 0.56847,
      dsab: {
        min: 1.8949,
        max: 2.27388
      },
      hfeuillet: {
        B1: 0.5414,
        B2: 0.43312,
        G: 0.43312 // wehn on the gaillard
      }
    }
  },
    { name: '6',
    sabord : {
      W: 0.64968,
      H: 0.48726,
      dsab: {
        min: 1.84076 ,
        max: 1.8949
      },
      hfeuillet: {
        B1: 0.48726,
        B2: 0.37898,
        G: 0.37898,
      }
    }
  },
    { name: '4',
    sabord : {
      W: 0.56847,
      H: 0.43312,
      dsab: {
        min: 1.84076,
        max: 1.84076
      },
      hfeuillet: {
        B1: 0.37898,
        G: 0.37898
      }
    }
  }
  ];

  ships =[
    { name: 'L\'Aimable', length: '147 pieds', armamentCaliberB1: 24, armamentQuantityB1: 13, armamentGuns: ''},
    { name: 'L\'Invincible', length: '144 pieds', armamentCaliberB1: 24, armamentQuantityB1: 13, armamentGuns: '' },
    { name: 'L\'Achille', length: '145 pieds', armamentCaliberB1: 24, armamentQuantityB1: 13, armamentGuns: '' },
    { name: 'Le Toulouse', length: '141 pieds', armamentCaliberB1: 24, armamentQuantityB1: 13, armamentGuns: '' },
    { name: 'L\'Ardent', length: '140 pieds 8 pouces', armamentCaliberB1: 24, armamentQuantityB1: 13, armamentGuns: '' },
  ]
  constructor() { }
}
